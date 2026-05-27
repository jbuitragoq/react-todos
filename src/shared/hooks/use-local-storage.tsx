import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {

  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const data = localStorage.getItem(key);
        if (data) {
          setItem(JSON.parse(data) as T);
        } else {
          localStorage.setItem(key, JSON.stringify(initialValue));
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 3000);
  }, []);

  const saveItem = (item: T) => {
    setItem(item);
    localStorage.setItem(key, JSON.stringify(item));
  }

  return {item, saveItem, loading, error} as const;
}

export default useLocalStorage;