import { useEffect } from "react";
import Router from "next/router";
import userRequest from "../../hooks/user-request";

const SignOut = () => {
  const { doRequest } = userRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {doRequest()}, []);

  return <div>signin you out</div>;
};

export default SignOut;
