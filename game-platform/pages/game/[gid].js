import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { AuthProvider } from 'lib/useUser';


export default function Game(props) {
    console.log("PROPS", props);
    return (
        //<AuthProvider>
        <section className='gameSection'>
            <h1>{props.name}</h1>
            {<iframe src={props.gameURL}></iframe>}
        </section>
        //</AuthProvider>
    )
}

export const getServerSideProps = async ({ query }) => {
    let gameObj = {};
    await db
        .collection("games")
        .doc(query.gid)
        .get()
        .then(async (result) => {
            gameObj = {
                name: result.data().name,
                gameURL: result.data().gameURL,
            };
            /*await db
              .collection("countries")
              .doc(serieObj.countryName)
              .get()
              .then((result) => {
                countryObj = {
                  name: result.data().name,
                  flag: result.data().flag,
                };
              });*/
        });
    return {

        props: {
            name: gameObj.name,
            gameURL: gameObj.gameURL
        },
    };
};