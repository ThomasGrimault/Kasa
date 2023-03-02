import styled from 'styled-components'
import logo from '../../assets/white_logo.png'
import colors from '../../utils/style/colors.js'

const FooterContainer = styled.div`
    width:100%;
    height: 210px;
    background-color: #000000;
    text-align: center;
    margin-top: 50px;

    @media (max-width: 767px) {
        margin-top: 30px;
    }
`

const FooterLogo = styled.img`
    width: 122px;
    height: 40px;
    margin-top: 50px;
`

const FooterText = styled.div`
    font-weight: 500;
    font-size: 24px;
    color: ${colors.secondary};
    margin-top: 50px;

    @media (max-width: 767px) {
        font-size: 12px;
        margin-top: 30px;
    }
`

function Footer() {
    return (
        <FooterContainer>
            <FooterLogo src={logo} alt='logo Kasa' />
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterContainer>
    )
}

export default Footer