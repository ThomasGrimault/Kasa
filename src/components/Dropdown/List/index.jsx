import {useState} from 'react'
import styled from 'styled-components'
import colors from '../../../utils/style/colors.js'
import downChevron from '../../../assets/down_chevron.png'
import upChevron from '../../../assets/up_chevron.png'

const DropdownContainer = styled.div`
    width: 100%;
    margin-top: 40px;

    @media (max-width: 767px) {
        margin-top: 20px;
    }
`

const DropdownHeader = styled.div `
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 2;

    @media (max-width: 767px) {
        height: 30px;
        border-radius: 5px;
    }
`

const DropdownTitle = styled.h2`
    font-weight: 500;
    font-size: 18px;
    margin-left: 20px;
    
    @media (max-width: 767px) {
        font-size: 13px;
    }
`

const DownChevron = styled.img`
    width: 26px;
    height: 16px;
    position: relative;
    right: 20px;
    top: 17px;
    border: none;
    cursor: pointer;

    @media (max-width: 767px) {
        width: 15px;
        height: 9px;
        top: 10px;
    }
`

const UpChevron = styled.img`
    width: 26px;
    height: 16px;
    position: relative;
    right: 20px;
    top: 17px;
    border: none;
    cursor: pointer;

    @media (max-width: 767px) {
        width: 15px;
        height: 9px;
        top: 10px;
    }
`

const DropdownListContainer = styled.div`
    height: 200px;
    overflow: auto;
    background-color: ${colors.tertiary};
    border-radius: 0 0 10px 10px;
    position: relative;
    top: -25px; 
    z-index: 1;

    @media (max-width: 767px) {
        border-radius: 5px;
        height: 150px;
    }
`

const DropdownList = styled.ul`
    padding: 40px 20px 20px 20px;
    list-style-type: none;
`

const DropdownListItem = styled.li`
    font-weight: 400;
    font-size: 18px;
    color: ${colors.primary};
    margin-bottom: 5px;

    @media (max-width: 767px) {
        font-size: 12px;
    }
`

function List(props) {
   
    const [isOpen, setIsOpen] = useState(false)
    
    const listItem = props.list.map((item, index) => <DropdownListItem key={index} >{item}</DropdownListItem>)

    return isOpen ? (
        <DropdownContainer>
            <DropdownHeader>
                <DropdownTitle>{props.title}</DropdownTitle>
                <UpChevron src={upChevron} onClick={() => setIsOpen(false)}/>
            </DropdownHeader>
            <DropdownListContainer>
                <DropdownList>{listItem}</DropdownList>
            </DropdownListContainer>
        </DropdownContainer>
    ) : (
        <DropdownContainer>
            <DropdownHeader>
                <DropdownTitle>{props.title}</DropdownTitle>
                <DownChevron src={downChevron} onClick={() => setIsOpen(true)}/>
            </DropdownHeader>
        </DropdownContainer>
    )
}
export default List