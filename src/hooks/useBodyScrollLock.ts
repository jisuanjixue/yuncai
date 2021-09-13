import { useLayoutEffect } from "react";

//启用正文滚动锁定。
const useBodyScrollLock = function (): void {
  useLayoutEffect((): any => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);
};

export { useBodyScrollLock };
