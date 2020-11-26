import { Container as HeaderContainer } from './styles';
import { Nav } from 'components';
import Link from 'next/link';

const Header = () => {
    return (
        <HeaderContainer>
            <Link href="/">
                <a>
                    <img src="/logo.png" alt="Minimal.ar Logo" />
                </a>
            </Link>
            <Nav />
        </HeaderContainer>
    )
}

export default Header;