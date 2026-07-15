import { useEffect, useState } from "react";

export function useDebounce<T>(val: T, delay: number = 800) {
  const [debouncedValue, setDebouncedValue] = useState(val);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(val);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [val]);

  return debouncedValue;
}
