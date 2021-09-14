import { useState, useCallback } from "react";
// true与false 的开关
const useToggler = (initialState: boolean): any[] => {
  const [value, setValue] = useState(initialState);

  const toggleValue: any = useCallback(() => setValue(prev => !prev), []);

  return [value, toggleValue];
};

export default useToggler;
