import { Header, Footer } from 'components'
import { Main } from 'containers'
import Container from './styles';

const Layout = ({children}) => {
    return (
        <Container>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </Container>
    )
}

export default Layout