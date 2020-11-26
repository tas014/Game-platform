// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {
    const {
        id,
        user_id,
        title,
        excerpt,
        content,
    } = req.body;

    return await db
        .collection("posts")
        .doc(id)
        .set(
            {
                user_id,
                title,
                excerpt,
                content
            }
        )
        .then(() => {
            console.log("Firebase 4 - Post Edited");
            res.status(200).json({ message: 'Post Creado', title })
            res.end();
        })
        .catch((error) =>
            console.log("Hubo un error creando el post", error)
        );

};