import React from 'react';
import { connect } from 'react-redux'

import styled from 'styled-components'
import { BigText } from './styles'

import Login from './components/Login'
import Main from './components/Main'

import { ActionCableConsumer } from 'react-actioncable-provider'





function App(props) {

  return (
    
    <Container>
      <Title>Who's Logged In?</Title>
      {props.loggedIn ? 
        <ActionCableConsumer
        channel={{channel: "UserChannel", user: props.loggedIn.name}}
        onReceived={(data)=>props.logUpdate(data)}
        onConnected={()=>props.connectUser(props.loggedIn.id)}
        onDisconnected={()=>console.log("DISCONNECT")}
        >
          <Main />
        </ActionCableConsumer>
      : <Login />}
    </Container>
  );
}

const Container = styled.div`


  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  width: 100vw;

  overflowY: scroll;

  background: rgb(255,175,133);
  background: linear-gradient(90deg, rgba(255,175,133,1) 0%, rgba(255,225,185,1) 100%);
`

const Title = styled(BigText)`

  margin: 20vh 0 4vh 0;
  
  font-size: 4vw;
  
`

const msp = state => {
  return {loggedIn: state.currentUser}
}

const mdp = dispatch => {
  return {
    connectUser: userId => dispatch({type:"CONNECT", userId: userId}),
    logUpdate: data => dispatch({type: "UPDATE", payload: data})
  }
}

export default connect(msp, mdp)(App);
