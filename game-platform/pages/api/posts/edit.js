// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {
    const {
        imageURL,
        name,
        gameURL,
        type,
    } = req.body;

    return await db
        .collection("games")
        .doc(id)
        .set(
            {
                name,
                imageURL,
                gameURL,
                type
            }
        )
        .then(() => {
            console.log("Firebase 4 - Game Edited");
            res.status(200).json({ message: 'Juego Creado', name })
            res.end();
        })
        .catch((error) =>
            console.log("Hubo un error creando el post", error)
        );

};