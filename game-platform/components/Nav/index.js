import { Container } from './styles'
import Link from 'next/link'
import { useAuth } from 'lib/useUser';
import { getUserFromCookie } from '../../lib/userCookies';

export default function Nav() {
    const user = getUserFromCookie();
    console.log(user);
    const auth = useAuth();
    return (
        <Container>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                {!auth.user ?
                    <>
                        <li><Link href="/signup"><a>Sign Up</a></Link></li>
                        <li><Link href="/login"><a>Login</a></Link></li>
                    </>
                    :
                    <>
                        <li><Link href="/dashboard"><a>Admin</a></Link></li>
                        <li><a onClick={() => auth.logout()}>Logout</a></li>
                    </>
                }
            </ul>
        </Container>
    )
}