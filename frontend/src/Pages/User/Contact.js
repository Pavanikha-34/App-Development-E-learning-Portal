import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #ffc107;
  height: 100vh;
  box-sizing: border-box;
`;

const InfoSection = styled.div`
  color: black;
  font-size: 2em;
  max-width: 40%;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
`;

const FormContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 40%;
  margin-right: 500px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-right: 50px;
`;

const Input = styled.input`
  padding: 15px;
  margin: 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  padding: 15px;
  margin: 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  resize: vertical;
`;

const Button = styled.button`
  padding: 15px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: rgb(224, 4, 121);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    userId: '',
    firstname: '',
    lastname: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/contact/add', formData)
      .then(response => {
        alert('Form submitted successfully!');
        console.log(response.data);
      })
      .catch(error => {
        alert('Error submitting the form.');
        console.error('There was an error!', error);
      });
  };

  return (
    <Container>
      <InfoSection>
        <Title>Register Here!</Title>
        <Subtitle>Get a Call Back</Subtitle>
        <p>Take your first step now!!!</p>
      </InfoSection>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input type="number" name="userId" placeholder="Enter your ID." value={formData.userId} onChange={handleChange} required />
          <Input type="text" name="firstname" placeholder="Enter your first name." value={formData.firstname} onChange={handleChange} required />
          <Input type="text" name="lastname" placeholder="Enter your last name." value={formData.lastname} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Enter your email ID." value={formData.email} onChange={handleChange} required />
          <Input type="tel" name="phone_number" placeholder="Mobile Number" value={formData.phone_number} onChange={handleChange} required />
          <TextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></TextArea>
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Contact;
