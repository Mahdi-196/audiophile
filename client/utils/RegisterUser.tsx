import axios from 'axios';

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

export const handleRegister = async (formData: RegisterFormData) => {
  try {
    const response = await axios.post('/api/register', formData);
    if (response.status === 201) {
      console.log('User registered successfully');
      // Handle successful registration (e.g., redirect to login page)
    } else {
      console.error('Failed to register user');
      // Handle registration failure
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.error('Registration endpoint not found (404)');
    } else {
      console.error('An error occurred during registration:', error);
    }
    // Handle error during registration
  }
};