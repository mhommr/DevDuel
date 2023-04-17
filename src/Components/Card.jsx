import styled from 'styled-components'

const StyledCard = styled.div`
    height: 300px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
` 

const Card = props => {
    return(
        <StyledCard>
            {props.children}
        </StyledCard>
    )
}

export default Card