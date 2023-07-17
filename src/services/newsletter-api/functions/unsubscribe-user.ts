import { api } from '../configs';

export type UnsubscribeUserProps = {
  userId: string;
};

export const unsubscribeUser = async ({
  userId,
}: UnsubscribeUserProps): Promise<void> => {
  await api.patch(`/users/${userId}/unsubscribe`);
};
