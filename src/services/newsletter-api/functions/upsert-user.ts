import { api } from '../configs';
import { User } from '@/interfaces';

export const upsertUser = async ({ email }: User): Promise<void> => {
  await api.post('/users', { email });
};
