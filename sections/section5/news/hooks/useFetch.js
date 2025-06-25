import { useState, useEffect, useCallback } from 'react';

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (signal) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(url, { 
        ...options,
        signal 
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Failed to fetch data.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchData(abortController.signal);
    
    return () => abortController.abort();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
} 