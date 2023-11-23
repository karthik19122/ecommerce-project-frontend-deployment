// Api.js
import axios from 'axios';

const API_BASE_URL = 'https://backend-deployment-ecommerce-project.onrender.com'; // Update the base URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, userData);
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const saveCartItems = async (userId, cartItems) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/save-cart-items`, { userId, cartItems });
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const getUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-user-data/${userId}`);
    return response.data; 
  } catch (error) {
    throw error;
  }
};
