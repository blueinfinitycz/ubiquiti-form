import { useEffect, useState } from 'react';
import { IFormData } from '../types/form'; 
import { getJson } from '../utils/promise';
import useBoolean from './useBoolean';

const useGetJson = (url = '') => {
  const [data, setData] = useState<IFormData>();
  const isLoading = useBoolean(false);

  useEffect(() => {
    const getData = async () => {
      isLoading.setTrue();
      const res = await getJson(url);
      isLoading.setFalse();
    };
    getData();
  }, []);

  return { jsonData: data, isLoading };
};

export default useGetJson;
