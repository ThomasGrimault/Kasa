import Tag from '../Tag'
import styled from 'styled-components'

const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

function Tags(props) {
    return (
        <TagsContainer>
            {props.tagsList.map((tag, index) =>
                <Tag tag={tag} key={index}/>
            )}
        </TagsContainer>
    )
}

export default Tags