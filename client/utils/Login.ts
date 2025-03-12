import axios from 'axios';

interface LoginData {
  email: string;
  password: string;
  subscribe: boolean;
  sshPublicKey?: string; // Add this field
}

const handleLogin = async ({ email, password, subscribe, sshPublicKey }: LoginData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', { email, password, sshPublicKey });
    console.log('Login response:', response.data);

    if (response.data.message === 'Login successful') {
      if (subscribe) {
        const subscribeResponse = await axios.post('http://localhost:5000/api/subscribe', { email });
        console.log('Subscribe response:', subscribeResponse.data);
      }
    } else {
      console.error('Login failed:', response.data.message);
    }
    return response;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export default handleLogin;