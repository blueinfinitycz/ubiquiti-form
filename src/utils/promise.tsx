// import { IJson } from '../types/statusCard';

export const getJson = async (url: string) => {
  return fetch(url);
};
