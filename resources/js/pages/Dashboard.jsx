import React, { useState } from "react";
import ProductsList from "./ProductsList";
import CreateProductForm from "./CreateProductForm";
import { Button, Container, Typography } from "@mui/material";

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  const handleToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleToggle}
        sx={{ mb: 3 }}
      >
        {showForm ? "Back to Products List" : "Add Product"}
      </Button>

      
      {showForm ? <CreateProductForm /> : <ProductsList />}
    </Container>
  );
}
