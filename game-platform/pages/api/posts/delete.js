// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {
    const {
        id
    } = req.body;

    return await db
        .collection("games")
        .doc(id)
        .delete()
        .then(() => {
            console.log("Firebase 4 - juego Borrado");
            res.status(200).json({ message: 'juego Borrado', id })
            res.end();
        })
        .catch((error) =>
            console.log("Hubo un error borrando el juego", error)
        );
};