import axios from 'axios';

interface LoginData {
  email: string;
  password: string;
  subscribe: boolean;
}

const handleLogin = async ({ email, password, subscribe }: LoginData) => {
  try {
    const response = await axios.post('http://localhost:3001/api/login', { email, password });
    console.log('Login response:', response.data);

    if (response.data.message === 'Login successful') {
      if (subscribe) {
        const subscribeResponse = await axios.post('http://localhost:3001/api/subscribe', { email });
        console.log('Subscribe response:', subscribeResponse.data);
      }
    } else {
      console.error('Login failed:', response.data.message);
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

export default handleLogin;