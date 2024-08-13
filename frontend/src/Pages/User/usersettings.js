// src/pages/UserSettings.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(224, 4, 121);
  color: white;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #000000;
  }
`;

const Usersettings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // Example logic to handle form submission
    console.log('User settings updated:', {
      username,
      email,
      password,
    });

    // Clear form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <SettingsContainer>
      <Title>Update Your Settings</Title>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Label>
            Username:
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </Label>
          <Label>
            Email:
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </Label>
          <Label>
            New Password:
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </Label>
          <Label>
            Confirm Password:
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
          </Label>
          <Button type="submit">Update Settings</Button>
        </Form>
      </Section>
    </SettingsContainer>
  );
};

export default Usersettings;
