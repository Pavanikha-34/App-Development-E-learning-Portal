// src/pages/Settings.js
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

const SubTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
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

const Select = styled.select`
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
  background-color: #4CAF50;
  color: white;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Settings = () => {
  const [portalName, setPortalName] = useState('');
  const [brandingColor, setBrandingColor] = useState('#ffffff');
  const [logo, setLogo] = useState(null);
  const [adminAccess, setAdminAccess] = useState('all');
  const [featureAccess, setFeatureAccess] = useState('all');
  const [backupFile, setBackupFile] = useState(null);

  const handlePortalSettingsSubmit = (e) => {
    e.preventDefault();
    console.log('Portal Settings:', { portalName, brandingColor, logo });
  };

  const handleAccessControlSubmit = (e) => {
    e.preventDefault();
    console.log('Access Control:', { adminAccess, featureAccess });
  };

  const handleBackupSubmit = (e) => {
    e.preventDefault();
    console.log('Backup Now');
  };

  const handleRestoreSubmit = (e) => {
    e.preventDefault();
    console.log('Restore from Backup:', backupFile);
  };

  return (
    <SettingsContainer>
      <Title>Settings and Configuration</Title>
      
      <Section>
        <SubTitle>Portal Settings</SubTitle>
        <Form onSubmit={handlePortalSettingsSubmit}>
          <Label>
            Portal Name:
            <Input
              type="text"
              value={portalName}
              onChange={(e) => setPortalName(e.target.value)}
              placeholder="Enter portal name"
              required
            />
          </Label>
          <Label>
            Branding Color:
            <Input
              type="color"
              value={brandingColor}
              onChange={(e) => setBrandingColor(e.target.value)}
              required
            />
          </Label>
          <Label>
            Logo:
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setLogo(e.target.files[0])}
            />
          </Label>
          <Button type="submit">Save Settings</Button>
        </Form>
      </Section>
      
      <Section>
        <SubTitle>Access Control</SubTitle>
        <Form onSubmit={handleAccessControlSubmit}>
          <Label>
            Admin Access:
            <Select value={adminAccess} onChange={(e) => setAdminAccess(e.target.value)} required>
              <option value="all">All Admins</option>
              <option value="specific">Specific Admins</option>
            </Select>
          </Label>
          <Label>
            Feature Access:
            <Select value={featureAccess} onChange={(e) => setFeatureAccess(e.target.value)} required>
              <option value="all">All Features</option>
              <option value="specific">Specific Features</option>
            </Select>
          </Label>
          <Button type="submit">Save Access Control</Button>
        </Form>
      </Section>
      
      <Section>
        <SubTitle>Backup and Restore</SubTitle>
        <Form onSubmit={handleBackupSubmit}>
          <Button type="submit">Backup Now</Button>
        </Form>
        <Form onSubmit={handleRestoreSubmit}>
          <Label>
            Restore from Backup:
            <Input
              type="file"
              accept=".zip,.tar,.gz"
              onChange={(e) => setBackupFile(e.target.files[0])}
              required
            />
          </Label>
          <Button type="submit">Restore</Button>
        </Form>
      </Section>
    </SettingsContainer>
  );
};

export default Settings;
