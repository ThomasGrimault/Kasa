import {Link} from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

const ErrorPage = styled.div`
    color: ${colors.primary};
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
`

const ErrorCode = styled.div`
    font-weight: 700;
    font-size: 288px;

    @media (max-width: 767px) {
        font-size: 96px;
    }
`

const ErrorText = styled.div`
    font-weight: 500;
    font-size: 36px;
    margin-bottom: 100px;

    @media (max-width: 767px) {
        width: 80%;
        font-size: 18px;
        margin: auto;
        margin-bottom: 100px;
    }
`

const StyledLink = styled(Link)`
    font-weight: 500;
    font-size: 18px;
    color: ${colors.primary};

    @media (max-width: 767px) {
        font-size: 14px;
    }
`

function Error(props) {
    return (
        <ErrorPage>
            <ErrorCode>{props.code}</ErrorCode>
            <ErrorText>{props.text}</ErrorText>
            <StyledLink to='/'>{props.link}</StyledLink>
        </ErrorPage>
    )
}

export default Error