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
  background-color: rgb(224, 4, 121);
  color: white;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;

const Assignment = () => {
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [userSubmission, setUserSubmission] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [marks, setMarks] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example logic to calculate marks based on submission
    const calculatedMarks = calculateMarks(userSubmission);
    setMarks(calculatedMarks);
  };

  const calculateMarks = (submission) => {
    // Simple example logic for calculating marks
    if (submission.length > 100) return 80;
    if (submission.length > 50) return 60;
    return 40;
  };

  return (
    <DashboardContainer>
      <Title>Submit Your Assignment</Title>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Label>
            Assignment Title:
            <Input
              type="text"
              value={assignmentTitle}
              onChange={(e) => setAssignmentTitle(e.target.value)}
              placeholder="Enter assignment title"
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
          <Button type="submit">Submit Assignment</Button>
        </Form>
      </Section>
      {marks !== null && (
        <Section>
          <Title>Marks</Title>
          <p>Your submission has been graded. Marks: {marks}</p>
        </Section>
      )}
    </DashboardContainer>
  );
};

export default Assignment;
