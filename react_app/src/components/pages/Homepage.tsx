// src/pages/Home.tsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigation=useNavigate()
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <Button variant='warning' onClick={()=>navigation('/register')} >register</Button>
    </div>
  )
};

export default Home;
