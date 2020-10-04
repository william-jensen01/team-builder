import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Team from './Components/Team';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
  });
  const [team, setTeam] = useState([]);

  const updateForm = (newName, newValue) => {
    setForm({...form, [newName]: newValue});
  };

  const submitForm = () => {
    const newMember = {
      name: form.name,
      email: form.email,
      role: form.role
    };
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form values={form} update={updateForm} submit={submitForm} />
      <Team team={team} />

    </div>
  );
}

export default App;
