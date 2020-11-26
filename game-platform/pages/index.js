import Link from 'next/link'
import Gamecard from '../components/Gamecard'
import Lbitem from '../components/LBItem'
import axios from 'axios'
import { useState, useEffect } from "react";
import { db } from "../lib/firebase";

export default function Home() {
    const [games, setGames] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        db.collection("games")
            /* .where("id", "==", id) */
            .onSnapshot((snap) => {
                const gamesDB = snap.docs.map((doc) => ({
                    id: doc.id,

                    ...doc.data(),
                }));
                setGames(gamesDB);
                console.log("games", gamesDB);
            });

        db.collection('usuarios').onSnapshot((snap) => {
            const usersDB = snap.docs.map((doc) => ({
                id: doc.id,

                ...doc.data(),
            }));
            setUsers(usersDB);
            console.log("games", usersDB);
        });
    }, []);

    return (
        <div>
            <section>
                {games.map(item => {
                    return (
                        <Gamecard title={item.name} type={item.type} thumbnail={item.imageURL} game={item.id} />
                    )
                })}
            </section>
            <section>
                <h1>Top Players</h1>
                <ul>
                    {users.map(item => {
                        if (item.nombre) {
                            return (
                                <Lbitem avatar={item.avatar} username={item.nombre} />
                            )
                        }
                    })}
                </ul>
            </section>
        </div>
    )
}
