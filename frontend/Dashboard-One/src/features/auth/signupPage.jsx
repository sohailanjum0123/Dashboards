import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';


const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const signupSuccessful = true; 

    if (signupSuccessful) {

      navigate('/dashboard'); 
    } else {
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required
          style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required
          style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '20px' }}
        />
        
        <button type="submit" style={{ width: '100%', padding: '10px' }}>Sign Up</button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Already have an account? 
        <Link to="/login" style={{ marginLeft: '5px', color: 'blue', textDecoration: 'none' }}>Log In</Link>
      </p>
    </div>
  );
};

export default SignupPage;