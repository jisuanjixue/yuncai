import { useEffect, useState } from "react";

//观察给定元素的可见性变化。
function useIntersectionObserver<T>(ref: any, options: T): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
}

export { useIntersectionObserver };
