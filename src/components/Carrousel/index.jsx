import {useState} from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import leftChevron from '../../assets/left_chevron.png'
import rightChevron from '../../assets/right_chevron.png'
import '../../utils/style/carrousel_picture_animation.css'

const CarrouselContainer = styled.div`
    width: 80%;
    height: 415px;
    border-radius: 25px;
    margin: auto;
    margin-bottom: 30px;
    position: relative;

    @media (max-width: 767px) {
        width: 90%;
        height: 255px;
        border-radius: 10px;
        margin-bottom: 10px;
    }
`

const CarrouselPicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    position: absolute;
    z-index: -1;

    @media (max-width: 767px) {
        border-radius: 10px;
    }
    `

const LeftChevron = styled.img`
    width: 46px;
    height: 80px;
    position: absolute;
    top: 170px;
    left: 30px;
    z-index: 1;
    cursor: pointer;

    @media (max-width: 767px) {
        width: 12px;
        height: 20px;
        top: 50%;
        left: 5px;
    }
`

const RigthChevron = styled.img`
    width: 46px;
    height: 80px;
    position: absolute;
    top: 170px;
    right: 30px;
    z-index: 1;
    cursor: pointer;

    @media (max-width: 767px) {
        width: 12px;
        height: 20px;
        top: 50%;
        right: 5px;
    }
`

const PictureNumber = styled.span`
    font-weight: 500;
    font-size: 18px;
    color: ${colors.secondary};
    position: absolute;
    bottom: 20px;
    left: 50%;
    z-index: 1;

    @media (max-width: 767px) {
        display: none;
    }
`

function Carrousel(props) {
    
    const [current, setCurrent] = useState(0)
    
    const length = props.picturesList.length
    
    const nextPicture = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    
    const previousPicture = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
    return (
        <CarrouselContainer>
            <LeftChevron src={leftChevron} onClick={previousPicture} className={length > 1 ? 'visible-chevron' : 'hidden-chevron'} />
            <RigthChevron src={rightChevron} onClick={nextPicture} className={length > 1 ? 'visible-chevron' : 'hidden-chevron'} />
            {props.picturesList.map((picture, index) => 
                <div className={index === current ? 'picture-active' : 'picture'} key={index}>
                    <CarrouselPicture src={picture} alt="Pièces intérieures du logement"/>
                </div>
            )}
            <PictureNumber>{current + 1}/{length}</PictureNumber>
        </CarrouselContainer>
    )
}

export default Carrousel