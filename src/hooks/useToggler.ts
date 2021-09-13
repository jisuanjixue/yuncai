import { useState, useCallback } from "react";

const useToggler = (initialState: boolean) => {
  const [value, setValue] = useState(initialState);

  const toggleValue: any = useCallback(() => setValue(prev => !prev), []);

  return [value, toggleValue];
};

export { useToggler };
