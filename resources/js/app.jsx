import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './componets/PrivateRoute';
import ProductsList from "./pages/ProductsList";
import CreateProductForm from "./pages/CreateProductForm";

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route 
                    path="/products" 
                    element={
                        <PrivateRoute>
                            <ProductsList />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/add-product" 
                    element={
                        <PrivateRoute>
                            <CreateProductForm />
                        </PrivateRoute>
                    } 
                />
            </Routes>
        </BrowserRouter>
    </Provider>
);
