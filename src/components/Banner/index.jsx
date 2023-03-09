import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

const BannerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        justify-content: left;
    }
`

const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
    filter: brightness(0.7);
    z-index: 1;

    @media (max-width: 767px) {
        border-radius: 10px;
    }
`

const BannerText = styled.h1`
    font-weight: 500;
    font-size: 48px;
    color: ${colors.secondary};
    margin: 0;
    display: flex;
    position: relative;
    bottom: 135px;
    z-index: 2;

    @media (max-width: 992px) {
        padding-left: 20px ;
        padding-right: 20px;
    }

    @media (max-width: 767px) {
        width: 60%;
        font-size: 24px;
        padding-left: 20px;
        padding-right: 0;
        bottom: 80px;
    }
    
`

function Banner(props) {    
    return (
        <BannerContainer>
            <BannerImage src={props.image} alt={props.alt}/>
            <BannerText>{props.text}</BannerText>
        </BannerContainer>
    )
}

export default Banner