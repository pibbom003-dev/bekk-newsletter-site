import { api } from '../configs';

export const countUsers = async (): Promise<number> => {
  const { count } = await api.get('/users/count');

  return count;
};
