import styled from 'styled-components'
import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import Button from './Button'
import Card from './Card'

const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    background: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    .Buttons {
        flex-direction: row;
    }
`

function Home() {
    return(
        <Fragment>
            <StyledHome>
            <Card>
            <h1>Welcome to Dev Duels!</h1>
                <div className='Buttons' justifyContent='space-around'>
                    <Button h='25px' w='100px' to='/inspect'>Inspect</Button>
                    <Button h='25px' w='100px' to='/duel'>Duel</Button>
                </div>
            </Card>
        </StyledHome>
        </Fragment>
    )
}

export default Home
