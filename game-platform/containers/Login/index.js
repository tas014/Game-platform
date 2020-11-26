import { LoginForm } from 'components'
import Link from 'next/link'
import Container from './styles';

const Login = () => {
    return (
        <Container>
            <h1>Login</h1>
            <LoginForm />
            <span>Don't have an account? <Link href='/signup'><a>Sign up!</a></Link></span>
        </Container>
    )
}

export default Login