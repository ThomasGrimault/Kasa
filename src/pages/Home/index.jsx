import styled from 'styled-components'
import Banner from '../../components/Banner'
import bannerImage from '../../assets/home_banner.png'
import accommodations from '../../data/accommodations.json'
import CardGallery from '../../components/Gallery'

const HomeBanner = styled.div`
    width: 80%;
    height: 223px;
    border-radius: 25px;
    margin: auto;
    margin-bottom: 50px;
    display: flex;

    @media (max-width: 767px) {
        width: 90%;
        justify-content: left;
        height: 110px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
`

function Home() {
    return (
        <div>
            <HomeBanner>
                <Banner image={bannerImage} alt="falaises en bord de mer" text="Chez vous, partout et ailleurs"/>
            </HomeBanner>
            <CardGallery datas={accommodations} to='../../Logement' alt="Pièce du logement" />
        </div>
    )
}

export default Home