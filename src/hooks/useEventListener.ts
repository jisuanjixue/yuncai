import { useEffect, useRef } from "react";

//为给定元素上的指定事件类型添加事件侦听器。
function useEventListener<T>(type: string, handler: T, el = window): void {
  const savedHandler: any = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = e => savedHandler.current(e);

    el.addEventListener(type, listener);

    return () => {
      el.removeEventListener(type, listener);
    };
  }, [type, el]);
}

export { useEventListener };
