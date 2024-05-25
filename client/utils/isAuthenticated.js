// utils/isAuthenticated.js
import jwt_decode from 'jwt-decode';

export const isAuthenticated = (token) => {
  if (token) {
    try {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000; // Convert current time to seconds
      // Check if token expiration time is greater than current time
      return decodedToken.exp > currentTime;
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  }
  return false;
};
