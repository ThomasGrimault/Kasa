import {Link} from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

const CardContainer = styled.div`
    width: 25%;
    height: 340px;
    border-radius: 10px;
    margin: 30px;
    position: relative;

    @media (max-width: 992px) {
        width: 40%;
    }

    @media (max-width: 767px) {
        height: 255px;
        width: 100%;
        margin: 0 0 20px 0;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    border-radius: 10px;
`

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    z-index: 1;
`

const DarkFilter = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    border-radius: 10px;
    position: absolute;
    bottom: 0px;
    z-index: 2;
`

const CardTitle = styled.h2`
    font-weight: 500;
    font-size: 18px;
    color: ${colors.secondary};
    margin: 0;
    padding-left: 20px;
    position: relative;
    bottom: 60px;
    z-index: 3;
    width: 80%;
    max-height: 40px;
    overflow: hidden;
`

function Card(props) {

    return (
        <CardContainer key={props.data.id}>
            <StyledLink to={`${props.to}/${props.data.id}`}>
                <CardImage src={props.data.cover} alt={`${props.alt}`} />
                <DarkFilter />
                <CardTitle >{props.data.title}</CardTitle>
            </StyledLink>
        </CardContainer>
    )
}

export default Card