import api from './api';

const fetchData = async () => {
  const res = await api.get()
  return res
};

export default fetchData;
