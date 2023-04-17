import { Fragment, useState } from 'react'
import styled from 'styled-components'

import Button from '../Components/Button'
import Card from '../Components/Card'
import Input from '../Components/Input'

const StyledInspect = styled.div`
    background: #333;
    height: 100vh;
    width: 100vw;
`

const initialFormState = {
    username: {
        value:'',
        type:'text',
        placeholder:'username'
    }
}

const initialFormError = {
    isError: false,
    message: '',
    field: ''
}

const Inspect = () => {

    const [ form, updateForm ] = useState(initialFormState)

    const [ formError, upddateFormError ] = useState(initialFormError)

    const formIsValid = () => {
        if ( !form.username.value ) {
            upddateFormError({
                ...formError,
                isError: true,
                message: 'username required!'
            })
            return false
        }
        return true
    }

    const resetError = () => upddateFormError(initialFormError)

    const getGitHub = (username) => {
        fetch(`https://api.github.com/users/${username}`)
          .then(response => response.json)
    } 

    // const handleFormSubmit = () => {
    //     if (formIsValid()) {
    //         const data = getGitHub({form.username.value})
            
    //     }
    // }

    return(
        <Fragment>
            <StyledInspect>
                <Card>
                    {Object.entries(form).map( ([key, props]) => (
                        <Fragment>
                            <Input 
                                key={key}
                                {...props}
                                onChange={ event => {
                                updateForm({
                                    ...form,
                                    [key]: {...props, value: event.target.value}
                                })
                                resetError()
                                }}  
                            />
                            {formError.isError && formError.field === key 
                            ? (
                                <p style={{
                                    color: 'palevioletred',
                                    width:'100%',
                                    textAlign: 'center'
                                }}>{formError.message}</p>
                            ) : ('') }
                        </Fragment>
                    ) )}
                    <Button h='40px' w='100px' onClick={handleFormSubmit}>Inspect</Button>
                </Card>
                { form.username.value
                  ? <Card>
                        {/* UserInfo */}
                  </Card>
                  : '' }
            </StyledInspect>
        </Fragment>
    )
}

export default Inspect