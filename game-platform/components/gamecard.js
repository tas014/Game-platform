import { useRouter } from "next/router";
import Link from 'next/link';

const Gamecard = props => {
    const { title, type, thumbnail, game } = props;
    return (
        <Link href={`/game/${game}`}>
            <article>
                <div>
                    <figure><img src={thumbnail} /></figure>
                    <label>{type}</label>
                </div>
                <h1>{title}</h1>
            </article>
        </Link>
    )
}

export default Gamecard