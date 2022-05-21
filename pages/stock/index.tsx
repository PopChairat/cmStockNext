import Layout from "@/components/Layouts/Layout";
import { resetUsername, userSelector, signUp } from "@/store/slices/userSlice";
import { store, useAppDispatch } from "@/store/store";
import { Button } from "@mui/material";
import { sign } from "crypto";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function Stock({}: Props) {
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
}
