import { useEffect, useState } from "react";

export const useConfig = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return {
    loaded,
  };
};
