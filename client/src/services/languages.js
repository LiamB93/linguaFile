import api from './api-config';

export const getAllLanguages = async () => {
  const resp = await api.get('/languages');
  return resp.data;
};

export const getOneLanguage = async (id) => {
  const resp = await api.get(`languages/${id}`)
  return resp.data
}
