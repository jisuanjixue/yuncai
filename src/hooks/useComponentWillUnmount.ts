import { useEffect } from "react";

const useComponentWillUnmount = (onUnmountHandler: () => void): void => {
  useEffect(
    () => () => {
      onUnmountHandler();
    },
    []
  );
};

export default useComponentWillUnmount;
