// Importo base de datos de firabase
import { db } from "lib/firebase";

export default async (req, res) => {
    const {
        user_id,
        title,
        excerpt,
        content,
    } = req.body;

    return await db
        .collection("posts")
        .doc()
        .set(
            {
                user_id,
                title,
                excerpt,
                content
            }
        )
        .then(() => {
            console.log("Firebase 4 - Post Creado");
            res.status(200).json({ message: 'Post Creado', title })
            res.end();
        })
        .catch((error) =>
            console.log("Hubo un error creando el post", error)
        );

};