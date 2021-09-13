import { useEffect, useState, useRef } from "react";

const useCallbackState = (od: any) => {
  const cbRef: any = useRef();
  const [data, setData] = useState<any>(od);

  useEffect(() => {
    cbRef.current && cbRef.current(data);
  }, [data]);

  return [
    data,
    (d, callback) => {
      cbRef.current = callback;
      setData(d);
    }
  ];
};

export { useCallbackState };
