import { useCallback, useEffect, useState } from "react";

export default function usePersistState(key, initialValue = "") {
  const getMemorizedValue = useCallback(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return undefined;
    }
  }, [key, initialValue]);

  const [value, setValue] = useState(getMemorizedValue());

  useEffect(() => {
    setValue(getMemorizedValue());
  }, [getMemorizedValue]);

  const handleSetValue = useCallback(
    (data) => {
      if (typeof window === "undefined") {
        return initialValue;
      }
      try {
        const finalValue = data instanceof Function ? data(value) : data;

        window.localStorage.setItem(key, JSON.stringify(finalValue));
        setValue(finalValue);
      } catch (error) {
        console.error(error);
      }
    },
    [key, initialValue, value]
  );

  const handleClearValue = useCallback(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      window.localStorage.removeItem(key);
      setValue();
    } catch (error) {
      console.error(error);
    }
  }, [key, initialValue]);

  return [value, handleSetValue, handleClearValue];
}
