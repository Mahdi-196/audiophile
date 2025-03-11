import axios from 'axios';

interface User {
  username: string;
  email: string;
  password: string;
}

const registerUser = async (user: User) => {
  try {
    const response = await axios.post('/api/register', user);
    console.log('User registered successfully:', response.data);
  } catch (error) {
    console.error('Error registering user:', error);
  }
};

export default registerUser;