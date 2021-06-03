import { useCallback, useState } from 'react';

const useHttp = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyDataFn) => {
    setIsLoading(true);
    setError(null);
    try {
      if (!requestConfig) {
        throw new Error('Something went wrong');
      }

      let fetchType =
        typeof requestConfig === 'string'
          ? fetch(requestConfig)
          : fetch(requestConfig.url, {
              method: requestConfig.method,
              headers: requestConfig.headers,
              body: JSON.stringify(requestConfig.body),
            });

      const response = await fetchType;

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyDataFn(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
