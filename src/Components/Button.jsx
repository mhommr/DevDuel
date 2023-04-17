import styled from 'styled-components'

const StyledButton = styled.button`
    width: ${({w}) => w};
    height: ${({ h }) => h};
    border: 1px solid #333;
    padding: 5px;
    margin: 10px;
    border-radius: 25px;
    &:hover {
        cursor: pointer;
    }
`

const Button = (props, { to }) => {
    return(
        <StyledButton {...props} to={to}/>
    )
}

export default Button