import axios from 'axios';

export const getServices = async () => {
  return await axios.get('https://frontend-assignment-5-server.vercel.app/api/v1/services')
};