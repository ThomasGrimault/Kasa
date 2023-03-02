import styled from 'styled-components'
import redStar from '../../assets/red-star.png'
import greyStar from '../../assets/grey-star.png'

const RatingContainer = styled.div`
    display: flex;
`
const RedStar = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 10px;

    @media (max-width: 767px) {
        width: 15px;
        height: 15px;
    }
`
const GreyStar = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 10px;

    @media (max-width: 767px) {
        width: 15px;
        height: 15px;
    }
`

function Rating(props) {
    const redStarNumber = props.rating
    const range = [1, 2, 3, 4, 5]
    return (        
        <RatingContainer>
            {range.map((rangeElement, index) => 
                redStarNumber >= rangeElement ? <RedStar src={redStar} key={index}/> : <GreyStar src={greyStar} key={index} />
            )}
        </RatingContainer>
    )
}

export default Rating