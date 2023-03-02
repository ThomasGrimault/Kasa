import styled from 'styled-components'
import Banner from '../../components/Banner'
import {about} from '../../data/about'
import Description from '../../components/Dropdown/Description'
import bannerImage from '../../assets/about_banner.png'

const AboutBanner = styled.div`
    width: 80%;
    height: 223px;
    border-radius: 25px;
    margin: auto;
    margin-bottom: 50px;

    @media (max-width: 767px) {
        width: 90%;
        border-radius: 10px;
        margin-bottom: 20px;
    }
`

const AboutContainer = styled.div`
    width: 70%;
    margin: auto;

    @media (max-width: 767px) {
        width: 90%;
    }
`

function A_propos() {
    return (
        <div>
            <AboutBanner>
                <Banner image={bannerImage} alt="Montagnes enneigées" />
            </AboutBanner>
            <AboutContainer>
                <Description title='Fiablité' content={about.fiability} />
                <Description title='Respect' content={about.respect} />
                <Description title='Service' content={about.service} />
                <Description title='Sécurité' content={about.security} />
            </AboutContainer>
        </div>
    )
}


export default A_propos