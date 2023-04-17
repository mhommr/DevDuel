import styled from 'styled-components'
import Card from '../Components/Card'
import Input from '../Components/Input'
import Button from '../Components/Button'

const StyledDuel = styled.div`
    background: #333;
    height: 100vh;
    width: 100vw;
`

const Duel = () => {
    return(
        <StyledDuel>
            <Card>
                <Input></Input>
                <Button h='25px' w='100px'>Duel</Button>
            </Card>
        </StyledDuel>
    )
}

export default Duel