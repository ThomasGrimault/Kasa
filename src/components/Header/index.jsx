import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/red_logo.png'
import colors from '../../utils/style/colors.js'

const HeaderContainer = styled.div`
    width: 80%;
    height: 68px;
    left: 100px;
    top: 40px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 50px;

    @media (max-width: 767px) {
        width: 90%;
        margin-top: 0;
        margin-bottom: 0;
    }
`

const LogoLink = styled(Link)`
@media (max-width: 767px) {
    margin: auto;
}
`

const Logo = styled.img`
    width: 100%;
    margin: auto;

    @media (max-width: 767px) {
        width: 80%;
    }
`

const Nav = styled.nav`
    width: 310px;
    display: flex;
    align-items: flex-end;
`

const NavLink = styled(Link)`
    color: ${colors.primary};
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    text-decoration: none;
    margin: auto;
    margin-right: 0;
    :focus {
        text-decoration: underline;
    }

    @media (max-width: 767px) {
        font-size: 12px;
        text-transform: uppercase;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <LogoLink to="/">
                <Logo src={logo} alt='Logo Kasa' />
            </LogoLink>
            <Nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/A_propos">A propos</NavLink>
            </Nav>
        </HeaderContainer>
    )
}

export default Header