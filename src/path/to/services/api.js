import axios from 'axios';

axios.defaults.baseURL = 'https://639fc8195eb888919701e818.mockapi.io/';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};

export const getMaterials = async _ => {
  const response = await axios.get('/materials');
  return response.data;
};

export const deleteMaterials = async id => {
  const response = await axios.delete(`/materials/${id}`);
  return response.data;
};

export const updateMaterial = async fields => {
  const response = await axios.put(`/materials/${fields.id}`, fields);
  return response.data;
};
