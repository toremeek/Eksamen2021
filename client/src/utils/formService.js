import client from './client';

export const createMessage = async (data) => {
  try {
    await client.create({ _type: 'feedback', ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const createRegistration = async (data) => {
  try {
    await client.create({ _type: 'registration', ...data });
  } catch (error) {
    throw new Error(error);
  }
};
