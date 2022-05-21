import Layout from "@/components/Layouts/Layout";
import { resetUsername, userSelector } from "@/store/slices/userSlice";
import { store, useAppDispatch } from "@/store/store";
import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function Index({}: Props) {
  const user = useSelector(userSelector);
  const dispatch = useAppDispatch();
  return (
    <Layout>
      <div>index {user.username}</div>
      <button onClick={() => dispatch(resetUsername({ newUsername: "Hello" }))}>
        RESET
      </button>
    </Layout>
  );
}
