import React from "react";
import { useMutation } from "@apollo/client";
import NavBar from "../../components/navbar";
import ADD_USER from "../../service/auth";

const Auth: React.FC<any> = () => {
  const [signUp, { data, loading, error }] = useMutation(ADD_USER);
  // eslint-disable-next-line no-console
  console.log(data);
  if (loading) return "正在加载...";
  if (error) return `注册失败! ${error.message}`;
  return (
    <div>
      <NavBar title="我的" layout={3} />
      <form
        onSubmit={e => {
          e.preventDefault();
          signUp({
            variables: {
              name: "bozai1",
              email: "207813830@qq.com",
              password: "abcd1234"
            }
          });
        }}
      >
        <button type="submit">添加</button>
      </form>
    </div>
  ) as any;
};

export default Auth;
