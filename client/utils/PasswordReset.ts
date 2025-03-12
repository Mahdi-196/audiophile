import axios from 'axios';

const sendPasswordResetLink = async (email: string) => {
  try {
    const response = await axios.post('/api/password-reset', { email });
    console.log('Password reset link sent:', response.data);
  } catch (error) {
    console.error('Error sending password reset link:', error);
  }
};

export default sendPasswordResetLink;
