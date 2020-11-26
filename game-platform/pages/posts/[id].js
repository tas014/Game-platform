import { db } from "lib/firebase";

const SinglePost = (props) => {

    return (
        <>
        <div>Titulo: {props.title}</div>
        <div>Bajada: {props.excerpt}</div>
        <div>Contenido: {props.content}</div>
        <div>Autor: {props.userMail}</div>
        </>
    )
}

export const getServerSideProps = async ({ query }) => {
    let blogObj = {};
    let userObj = {}
    await db
        .collection('posts')
        .doc(query.id)
        .get()
        .then(async result => {
            blogObj = { title: result.data().title, content: result.data().content,excerpt: result.data().excerpt, user_id: result.data().user_id }

            await db
                .collection('users')
                .doc(blogObj.user_id)
                .get()
                .then(result => {
                    userObj = { email: result.data().email, nombre: result.data().nombre }
                });
        });
    return {
        props: {
            title: blogObj.title,
            content: blogObj.content,
            excerpt: blogObj.excerpt,
            userMail: userObj.email
        }
    }
}

export default SinglePost