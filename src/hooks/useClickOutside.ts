import { useEffect } from "react";

function useClickOutside(ref: any, callback: any): void {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
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

export { useClickOutside };
