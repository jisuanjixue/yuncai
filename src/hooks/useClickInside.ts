import { useEffect } from "react";

interface REF {
  current?: any;
}

function useClickInside(ref: REF, callback: () => void): void {
  const handleClick = e => {
    if (ref.current && ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}

export default useClickInside;
