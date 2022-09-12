import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setData(null);
    setIsPending(true);
    setError(null);
    const fetchData = async () => {
      try {
        const res = await axios.get(url, { signal: abortController.signal });
        setData(res.data.data);
      } catch (err) {
        if (err.name !== 'CanceledError') {
          setError(err.response.data.error);
        }
      } finally {
        setIsPending(false);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 500);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error, setData };
}
