import React from 'react';
import styled from 'styled-components';

const TeamContainer = styled.div `
display: flex;
align-items: center;
flex-direction: column;
`

const Member = styled.div `
display: inline-block;
width: 30%;
margin: 10px auto;
background-color: #065c6f;
color: #faf3dd;
border: 2px solid black;
p {
    font-size: 2rem;
    margin: 10px;
}
`

export default function Team(props){
    return (
        <TeamContainer>
            {props.team.map((member) => (
                <Member>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </Member>
            ))}
        </TeamContainer>

    )
}