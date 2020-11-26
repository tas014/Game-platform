import { useRouter } from "next/router";
import { Container } from './styles'
import Link from 'next/link';

const Gamecard = props => {
    const { title, type, thumbnail, game } = props;
    return (
        <Link href={`/game/${game}`}>
            <Container>
                <div>
                    <figure><img src={thumbnail} /></figure>
                    <label>{type}</label>
                </div>
                <h1>{title}</h1>
            </Container>
        </Link>
    )
}

export default Gamecard