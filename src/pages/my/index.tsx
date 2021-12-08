import React from "react";
import NavBar from "../../components/navbar";

const My: React.FC<any> = () => {
  return (
    <div className="bg-green-600 bg-opacity-100 md:flex sm:flex">
      <NavBar title="我的" layout={3} />
      <div className="flex-auto flex-col items-center bg-green-300 justify-center mt-7 h-44 w-72 ml-3.5 rounded-md"></div>
    </div>
  ) as any;
};

export default My;
