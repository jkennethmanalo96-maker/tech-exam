import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../store/slices/authSlice';
import { useNavigate } from "react-router-dom";
import {
    Box,
    TextField,
    Button,
    Typography, 
    Alert,
    CircularProgress,
    Container,
    Paper
} from '@mui/material';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, user, token } = useSelector(state => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (error) dispatch(clearError());
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (error) dispatch(clearError());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    
    useEffect(() => {
        if (token || localStorage.getItem("token")) {
            navigate("/dashboard");
        }
    }, [token, navigate]);

    
    useEffect(() => {
        let timer;
        if (user) {
            timer = setTimeout(() => dispatch(clearError()), 3000);
        }
        return () => clearTimeout(timer);
    }, [user, dispatch]);

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ mt: 10, p: 4 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>

               
                {error && typeof error === 'string' && (
                    <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
                )}

               
                {error?.errors && Object.values(error.errors).map((arr, idx) =>
                    arr.map((msg, i) => (
                        <Alert key={`${idx}-${i}`} severity="error" sx={{ mb: 1 }}>
                            {msg}
                        </Alert>
                    ))
                )}

              
                {user && <Alert severity="success" sx={{ mb: 2 }}>Login successful!</Alert>}

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        margin="normal"
                        value={email}
                        onChange={handleEmailChange}
                        
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        margin="normal"
                        value={password}
                        onChange={handlePasswordChange}
                        
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ mt: 2 }}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : 'Login'}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
