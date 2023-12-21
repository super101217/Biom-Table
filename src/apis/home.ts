import { DataType } from 'types';

export const getList = (): Promise<DataType> => {
  return fetch('biom.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => res.json());
};
