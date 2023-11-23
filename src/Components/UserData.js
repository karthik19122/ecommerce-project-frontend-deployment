
import React from 'react';

const UserData = ({ username, email }) => {
  return (
    <div>
      <h2>User Data</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      
    </div>
  );
};

export default UserData;
