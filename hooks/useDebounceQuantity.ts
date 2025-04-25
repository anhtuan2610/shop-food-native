import { useEffect, useState } from "react";

export const useDebounceQuantity = ({ quantity }: { quantity: number }) => {
  const [debouncedQuantity, setDebouncedQuantity] = useState(quantity);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuantity(quantity);
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [quantity]);
  return debouncedQuantity;
};
