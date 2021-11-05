import api from './api-config';

export const getAllWords = async () => {
  const resp = await api.get('/words');
  return resp.data;
};

export const getOneWord = async (id) => {
  const resp = await api.get(`/words/${id}`);
  return resp.data;
};

export const postWord = async (id, wordData) => {
  const resp = await api.post(`/languages/${id}`, { word: wordData });
  return resp.data;
};

export const putWord = async (id, wordData) => {
  const resp = await api.put(`/words/${id}`, { word: wordData });
  return resp.data;
};

export const deleteWord = async (id) => {
  const resp = await api.delete(`/words/${id}`);
  return resp;
};

export const addLanguageToWord = async (languageId, id) => {
  const resp = await api.put(`/languages/${languageId}/words/${id}`);
  return resp.data;
};