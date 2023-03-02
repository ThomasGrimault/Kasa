import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import Card from '../Card'

const Gallery = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: ${colors.tertiary};
    border-radius: 25px;
    padding-top: 40px;
    padding-bottom: 40px;
    margin: auto;

    @media (max-width: 767px) {
        width: 90%;
        padding: 0;
        background: ${colors.secondary};
    }
`
function CardGallery(props) {

    return (
        <Gallery >
            {props.datas.map((data) => 
                <Card key={data.id} to={props.to} data={data} alt={props.alt}/>
            )}
        </Gallery>
    )
}

export default CardGallery