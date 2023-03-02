import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

const TagContainer = styled.div`
    width: 115px;
    height: 25px;
    background-color: ${colors.primary};
    border-radius: 10px;
    color: ${colors.secondary};
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    line-height: 25px;
    margin-right: 10px;

    @media (max-width: 767px) {
        width: 84px;
        height: 18px;
        border-radius: 5px;
        font-size: 10px;
        line-height: 18px;
    }
`

function Tag(props) {
    return (
        <TagContainer>{props.tag}</TagContainer>
    )
}

export default Tag