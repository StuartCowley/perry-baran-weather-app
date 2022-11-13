import { useState, useEffect } from "react";

const useDelayedUnmount = (isMounted, delay) => {
  const [render, setRender] = useState(isMounted);

  useEffect(() => {
    let timeOut;
    if (isMounted) {
      setRender(true);
    } else {
      timeOut = setTimeout(() => {
        setRender(false);
      }, delay);
    }
    return () => clearTimeout(timeOut);
  }, [isMounted, delay]);

  return render;
};

export default useDelayedUnmount;
