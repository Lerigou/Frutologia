import axios from 'axios';

export const api = axios.create({
  baseURL: "https://www.fruityvice.com",
});

export const getFruit = async (name) => {
  try {
    const response = await api.get(`/api/fruit/${name}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch fruit data');
  }
};
