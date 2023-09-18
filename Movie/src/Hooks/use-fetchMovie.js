import { useCallback } from 'react';

const useFetchMovie = () => {
  const fetchData = useCallback(async (apiFunc, callback) => {
    const response = await apiFunc;
    const data = await response.json();
    callback(data);
  }, []);
  return { fetchData };
};

export default useFetchMovie;
