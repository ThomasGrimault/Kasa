import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import accommodations from '../../data/accommodations.json'
import colors from '../../utils/style/colors.js'
import Carrousel from '../../components/Carrousel'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Description from '../../components/Dropdown/Description'
import List from '../../components/Dropdown/List'
import Error from '../../components/Error'

const GeneralPresentation = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 20px;

    @media (max-width: 767px) {
        width: 90%;
        flex-direction: column;
        margin-bottom: 10px;
    }
`

const Accommodation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media (max-width: 767px) {
        margin-bottom: 10px;
    }
`

const Title = styled.h1`
    font-weight: 500;
    font-size: 36px;
    color: ${colors.primary};
    margin: 0 0 5px 0;

    @media (max-width: 767px) {
        font-size: 18px;
    }
`

const Location = styled.div`
    color: ${colors.primary};
    margin-bottom: 20px;

    @media (max-width: 767px) {
        font-size: 14px;
        margin-bottom: 10px;
    }
`

const HostAndRating = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    @media (max-width: 767px) {
        flex-direction: row-reverse;
        align-items: center;
    }
`

const DescriptionAndEquipment = styled.div`
    width: 80%;  
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 0;

    @media (max-width: 767px) {
        width: 90%;
        flex-direction: column;
    }
`

const DescriptionContainer = styled.div`
    width: 45%;

    @media (max-width: 767px) {
        width: 100%;
    }
`

const EquipmentContainer = styled.div`
    width: 45%; 

    @media (max-width: 767px) {
        width: 100%;
    }
`   

function AccommodationPage() {
    
    // Récupération de l'ID dans l'URL de la page
    const {id} = useParams()

    // Récupération des données de l'appartement sélecttionné
    function idSearch(accommodation) {
        return accommodation.id === `${id}`
    }

    const accommodation = accommodations.find(idSearch)
  
    if (accommodation) {  
        
        return (
            <div key={id}>
                    <Carrousel picturesList={accommodation.pictures}/>
                    <GeneralPresentation>
                        <Accommodation>
                            <Title>{accommodation.title}</Title>
                            <Location>{accommodation.location}</Location>
                            <Tags tagsList={accommodation.tags}/>
                        </Accommodation>
                        <HostAndRating>
                            <Host hostName={accommodation.host.name} hostPicture={accommodation.host.picture}/>
                            <Rating rating={accommodation.rating}/>
                        </HostAndRating>
                    </GeneralPresentation>
                    <DescriptionAndEquipment>
                        <DescriptionContainer>
                            <Description title="Description" content={accommodation.description}/>
                        </DescriptionContainer>
                        <EquipmentContainer>
                            <List title="Équipement" list={accommodation.equipments} />
                        </EquipmentContainer>
                    </DescriptionAndEquipment>
            </div>
        )
    } else {
        return (
            <Error />
        )
    }
}

export default AccommodationPage