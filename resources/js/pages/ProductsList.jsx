import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productsSlice";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@mui/material";

export default function ProductsList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

    const handleToggle = () => {
    setShowForm(!showForm);
  };


  if (loading) return <CircularProgress />;

  return (
    <Box sx={{ mt: 4, maxWidth: 1000, mx: "auto" }}> 
      <Typography variant="h5" gutterBottom>
        Products List
      </Typography>
      <Box sx={{ mt: 3 }}>
      <Button
        variant="contained"
        color="primary"
         onClick={() => navigate("/add-product")}
        sx={{ mb: 3 }}
      >
        Add Product
      </Button></Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(items) &&
              items.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
