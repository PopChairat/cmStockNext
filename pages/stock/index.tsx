import Layout from "@/components/Layouts/Layout";
import withAuth from "@/components/withAuth";
import { resetUsername, userSelector, signUp } from "@/store/slices/userSlice";
import { store, useAppDispatch } from "@/store/store";
import { Button } from "@mui/material";
import { sign } from "crypto";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Stock = ({}: Props) => {
  const user = useSelector(userSelector);
  const dispatch = useAppDispatch();
  return (
    <Layout>
      <div>index {user.username}</div>
      <button onClick={() => dispatch(resetUsername({ data: "Hello" }))}>
        RESET
      </button>
      <button
        onClick={() => dispatch(signUp({ username: "admin", password: "222" }))}
      >
        Sign up
      </button>
    </Layout>
  );
};

export default withAuth(Stock);
