// utils/isAdmin.js
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie'; // Import Cookies library

export const isAdmin = () => {
  const token = Cookies.get('token'); // Retrieve token from cookies
  if (token) {
    try {
      const decodedToken = jwt_decode(token);
      return decodedToken.role === 'admin';
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  } else {
    return false;
  }
};
