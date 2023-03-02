import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

const HostContainer = styled.div`
    display: flex;
    align-items: flex-end;

    @media (max-width: 767px) {
        align-items: center;
    }
`

const HostName = styled.div`
    width: 93px;
    height: 52px;
    font-weight: 500;
    font-size: 18px;
    color: ${colors.primary};

    @media (max-width: 767px) {
        font-size: 12px;
        text-align: right;
        padding-right: 10px;
        line-height: 52px;
    }
`

const HostPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 100px;

    @media (max-width: 767px) {
        width: 32px;
        height: 32px;
    }
`

function Host(props) {
    return (
    <HostContainer>
        <HostName>{props.hostName}</HostName>
        <HostPicture src={props.hostPicture} alt={props.alt}/>
    </HostContainer>
    )
}

export default Host