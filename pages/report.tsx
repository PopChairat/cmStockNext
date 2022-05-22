import Layout from "@/components/Layouts/Layout";
import withAuth from "@/components/withAuth";
import React from "react";

type Props = {};

const Report = ({}: Props) => {
  return (
    <Layout>
      <div>report</div>
    </Layout>
  );
};
export default withAuth(Report);
