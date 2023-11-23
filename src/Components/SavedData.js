// Create a new component, for example, SavedData.js

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const SavedData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    Axios.get('https://backend-deployment-ecommerce-project.onrender.com/saved-data-endpoint')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Saved Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}></li>
        ))}
      </ul>
    </div>
  );
};

export default SavedData;
