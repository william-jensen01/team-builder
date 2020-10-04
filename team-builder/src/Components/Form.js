import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
display: flex;
justify-content: center;
align-items: baseline;
margin: 25px;
`
const NameContainer = styled.div `
margin: 5px;
label {
    margin: 5px;
    font-size: 1.5rem;
    font-weight: bold;
}
input {
    font-size: 1.25rem;
}
`
const EmailContainer = styled.div `
margin: 5px;
label {
    margin: 5px;
    font-size: 1.5rem;
    font-weight: bold;
}
input {
    font-size: 1.25rem;
}
`
const RoleContainer = styled.div `
margin: 5px;
label {
    margin: 5px;
    font-size: 1.5rem;
    font-weight: bold;
}
select {
    font-size: 1.25rem;
    margin: 5px;
}
`
const Button = styled.button `
margin: 10px;
padding: 10px 20px;
background-color: #64958f;
color: #ffbb91;
font-size: 1rem;
border: none;
`

export default function Form(props){

    const {update, values, submit} = props;

    const handleChanges = event => {
        const {name, value} = event.target;
        update(name, value);
    };

    const onSubmit = event => {
        event.preventDefault();
        submit();
    };
    
    return (
        <Container>
        <NameContainer>
            <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id='name'
                type="text"
                placeholder="Enter Name"
                onChange={handleChanges}
                value={values.name}
                name="name"
                />
            </form>
        </NameContainer>
        <EmailContainer>
            <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input
                id='email'
                type="email"
                placeholder="Enter Email"
                onChange={handleChanges}
                value={values.email}
                name="email"
            />
            </form>
        </EmailContainer>

        <RoleContainer>
            <form onSubmit={onSubmit}>
            <label htmlFor="role">Role</label>
            <select id='role' name='role' value={values.role} onChange={handleChanges}>
                <option value=''>Select a role</option> 
                <option value='Backend Engineer'>Backend</option> 
                <option value='Frontend Engineer'>Frontend</option> 
            </select>
            <Button>Submit</Button>
            </form>
        </RoleContainer>
        </Container>    
        )
}