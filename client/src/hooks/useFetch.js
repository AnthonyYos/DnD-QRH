import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axios.get(url, { signal: abortController.signal });
        setData(res.data.data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        if (err.name !== 'CanceledError') {
          setIsPending(false);
          setError(err.message);
        }
      }
    };

    setTimeout(() => {
      fetchData();
    }, 500);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error, setData };
}
