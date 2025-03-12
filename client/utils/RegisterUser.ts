import axios from 'axios';

interface User {
  username: string;
  email: string;
  password: string;
  resetPassword?: boolean;
  sshPublicKey?: string; // Add this field
}

const registerUser = async (user: User) => {
  try {
    const response = await axios.post('http://localhost:5000/api/registerUser', user);
    return response;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export default registerUser;