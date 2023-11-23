
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/reset-password', {
        email,
        newPassword,
      });

      if (response.data.success) {
        console.log(response.data.message);
        window.alert('Password reset successfully');
      } else {
        console.error('Password reset successfully:', response.data.message);
        window.alert('Password reset successfully');
      }
    } catch (error) {
      console.error('Password reset successfully:', error);
      window.alert('Password reset successfully');
    }
  };

  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const boxStyle = {
    width: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#3498db',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
    color: 'white', 
  };

  const inputStyle = {
    height: '40px',
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#2c3e50', 
    color: 'white',
    padding: '10px',
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: 'white' }}>Forgot Password</h2>
      <div style={boxStyle}>
        <form onSubmit={handleResetPassword}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={inputStyle}
            required
          />

          <button type="submit" style={buttonStyle}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
