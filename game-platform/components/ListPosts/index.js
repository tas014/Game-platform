import { useState, useEffect } from 'react'
import { db } from "lib/firebase";
import Link from 'next/link'
import axios from 'axios';
import { EditForm } from 'components'

const ListPosts = ({ userId }) => {
    const [posts, setPosts] = useState([])
    const [postToEdit, setPostToEdit] = useState('')

    useEffect(() => {
        db
            .collection('usuarios')
            .where("user_id", "==", userId)
            .onSnapshot(snap => {
                const postsDB = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPosts(postsDB)
                console.log(postsDB)
            });
        // return (() => {
        //     //unsubscribe the listener here
        //     dbCall.unsubscribe()
        // })
    }, []);


    const handleEdit = async (id) => {
        setPostToEdit(id)
    }

    const handleEditFormClose = () => {
        setPostToEdit('')
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.post('/api/posts/delete', { id })
            const data = await res.data
            console.log(res.status)
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error);
        }
    }

    return (
        <ul>
            {posts && posts.map(({ id, user_id, title, excerpt, content }) =>
                <li key={id}>
                    <Link href={`/posts/${id}`}>
                        <a>{title}</a>
                    </Link>
                    <button
                        onClick={() => handleEdit(id)}
                    >Edit</button>
                    <button
                        onClick={() => handleDelete(id)}
                    >Delete</button>
                    {id === postToEdit &&
                        <EditForm values={{ id, user_id, title, excerpt, content }} handleEditFormClose={handleEditFormClose}
                        />
                    }
                </li>
            )}
        </ul>
    )
}

export default ListPosts