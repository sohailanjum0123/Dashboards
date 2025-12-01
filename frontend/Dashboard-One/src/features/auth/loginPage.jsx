import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const loginSuccessful = true; 

    if (loginSuccessful) {

      navigate('/dashboard'); 
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };


return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <form onSubmit={handleLogin}>
        <button type="submit" style={{ width: '100%', padding: '10px' }}>Log In</button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Don't have an account? 
        <Link to="/signup" style={{ marginLeft: '5px', color: 'blue', textDecoration: 'none' }}>Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;