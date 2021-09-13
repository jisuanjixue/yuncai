import { useEffect } from "react";

function useClickInside(ref: any, callback: any): void {
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

export { useClickInside };
