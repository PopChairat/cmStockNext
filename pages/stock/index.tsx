import Layout from "@/components/Layouts/Layout";
import withAuth from "@/components/withAuth";
import { store, useAppDispatch } from "@/store/store";
import { Box, Button } from "@mui/material";
import { sign } from "crypto";
import React from "react";
import { useSelector } from "react-redux";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { getProducts, productSelector } from "@/store/slices/productSlice";

type Props = {};

const Stock = ({}: Props) => {
  const productList = useSelector(productSelector);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 150,
    },
  ];

  return (
    <Layout>
      <Box>Stock</Box>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={productList ?? []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Layout>
  );
};

export default withAuth(Stock);
