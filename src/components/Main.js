import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'
import { Box, BigText } from '../styles'

import User from './User'

const Main = props => {
    console.log(props.users)
    return (
        <Container>
            <Confirmation>
                <Text>{props.name}, you're logged in!</Text>
                <Button onClick={props.logout}>logout</Button>
            </Confirmation>
            <Text>Here's who's logged in:</Text>
            <Users>
                {props.users.map((user, index) => <User key={user.id} index={index} {...user} />)}
            </Users>
        </Container>
        
    )
}




const Container = styled.div`

    width: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;

`
const Confirmation = styled(Box)`
    height: fit-content;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 0 4vh 0;
`

const Text = styled(BigText)`
    font-size: 1.6em;
    margin: 1vh 0;
`

const Button = styled.button`
    width: 30%;
    max-width: 80px;

    color: #EAE8F2;
    font-size: 1.2vw;
    font-family: 'Roboto', sans-serif;

    padding: 0.5vw 1vw;
    margin: 1vh 0 2vh 0;

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

const Users = styled(Box)`
    margin: 2vh 0;
    width: 80%;
`



const msp = state => {
    return {name: state.currentUser.name, users: state.allUsers}
}

const mdp = dispatch => {
    return {logout: () => dispatch({type:"LOGOUT"})}
}

export default connect(msp, mdp)(Main)

