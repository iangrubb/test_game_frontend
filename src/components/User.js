import React from 'react'

import styled from 'styled-components'

import { SmallText } from '../styles'

export default function User(props) {
    return (
        <Container>
            <Circle logged={props.logged}/><Name>{props.index + 1}. {props.name}</Name>
        </Container>
    )
}

const Circle = styled.div`

    width: 1em;
    height: 1em;

    border-radius: 50%;
    box-shadow: 1px 1px 0 black;

    background: ${props => props.logged ? 'green' : 'red'};

    margin: 0 1vw 0 0;


`

const Container = styled.div`

    align-self: flex-start;

    margin: 1vh 2vw;

    display: flex;



`

const Name = styled(SmallText)``


