import Link from 'next/link';
import { getUserFromCookie } from '../lib/userCookies'

const Header = () => {
    const user = getUserFromCookie();
    console.log(user);
    return (
        <header>
            <div>
                <Link href='/'>
                    <a><h1>FPUnigames</h1></a>
                </Link>
                <div>{user ? <><h1>{user}</h1></> : <>
                    <Link href='/login'>
                        <a>Login</a>
                    </Link>
                </>}
                </div>
            </div>
        </header>
    )
}

export default Header