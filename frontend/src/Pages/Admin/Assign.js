// src/pages/AdminDashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
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

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  resize: vertical;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Assign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Assignment created:', {
      title,
      description,
      dueDate,
      attachment,
    });

    // Clear form
    setTitle('');
    setDescription('');
    setDueDate('');
    setAttachment(null);
  };

  return (
    <DashboardContainer>
      <Title>Create New Assignment</Title>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Label>
            Title:
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter assignment title"
              required
            />
          </Label>
          
          
          <Label>
            Due Date:
            <Input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </Label>
          <Label>
            Attachment:
            <FileInput
              type="file"
              onChange={(e) => setAttachment(e.target.files[0])}
            />
          </Label>
          <Button type="submit">Create Assignment</Button>
        </Form>
      </Section>
    </DashboardContainer>
  );
};

export default Assign;
