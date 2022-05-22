import Layout from "@/components/Layouts/Layout";
import withAuth from "@/components/withAuth";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

type Props = {
  product?: string;
};

const Edit = ({ product }: Props) => {
  return (
    <Layout>
      <div>Edit {product}</div>
    </Layout>
  );
};

export default withAuth(Edit);

//ทำค่า ID จากหน้ามา ประมวลผลก่อนการ Generate Page ขึ้นมา
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id }: any = context.query;
  if (id) {
    const product = id; //await doGetStockById(id);
    return {
      props: {
        product,
      },
    };
  } else {
    return { props: {} };
  }
};
