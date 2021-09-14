import { useEffect } from "react";

const useComponentDidMount = (onMountHandler: () => void): void => {
  useEffect(() => {
    onMountHandler();
  }, []);
};

export default useComponentDidMount;
