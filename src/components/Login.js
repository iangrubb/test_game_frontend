import React, { useState } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'
import { Box, BigText } from '../styles'



const Login = props => {

    const [name, setName] = useState("")

    const handleChange = e => setName(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        props.login(name)
    }

    return (
        <Container>
            <Title>You're <i>not</i> logged in!</Title>
            <Form onSubmit={handleSubmit}>
                <Input onChange={handleChange} type="text" placeholder="Who are you?" value={name}></Input>
                <Button type="submit"/>
            </Form>

        </Container>
    )
}

const Container = styled(Box)`

    width: 30%;
    height: 18%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Form = styled.form`

    width: 80%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin: 1vh 0;

`

const Input = styled.input`

    font-family: 'Roboto', sans-serif;
    padding: 8px 12px;
    border-radius: 8px;
    border: solid #4E4960 2px;
    background: #EAE8F2;
    color: #4E4960;

    box-shadow: inset 0 0 2px #4E4960;

    font-size: 1vw;

    width: 60%;
    height: 4vh;

    &:focus {
        outline: none;
    }
`

const Button = styled.input`
    width: 30%;
    max-width: 80px;

    color: #EAE8F2;
    font-size: 1.2vw;
    font-family: 'Roboto', sans-serif;

    padding: 0.5vw 1vw;

    background: #4E4960;
    border: none;
    border-radius: 8px;

    box-shadow: 2px 2px 4px #3B3849;

    transform: translateY(-0.1vw);
    transition: all 0.07s;

    &:focus {
        outline: none;
    }

    &:active {
        transform: translateY(0vw);
        box-shadow: 0.5px 0.5px 2px #3B3849;
    }


`

const Title = styled(BigText)`

    font-size: 1.6em;
    margin: 1vh 0;

`

const msp = state => {
    return {}
}

const mdp = dispatch => {
    return {
        login: name => dispatch({type: "LOGIN", payload: name})
    }
}

export default connect(msp, mdp)(Login)
