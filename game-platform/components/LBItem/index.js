import { Container } from './styles'

const Lbitem = props => {
    const { avatar, username } = props;
    return (
        <Container>
            <figure><img src={avatar} /></figure>
            <h3>{username}</h3>
        </Container>
    )
}

export default Lbitem