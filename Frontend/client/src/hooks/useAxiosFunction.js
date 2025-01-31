import { useState, useEffect } from 'react';

export default function useAxiosFunction() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState();

  const axiosFetch = async configObj => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      setResponse(null);
      setError(null);
      const ctrl = new AbortController();
      setController(ctrl);

      const res = await axiosInstance({
        url,
        method: method.toLowerCase(),
        ...requestConfig,
        signal: ctrl.signal,
      });

      setResponse(res.data.characterData);
    } catch (error) {
      if (error.name !== 'CanceledError') {
        setError(error.response.data.error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return { response, loading, error, setResponse, axiosFetch };
}
