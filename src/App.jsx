import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthContext } from './AuthContext';
import { useState } from 'react';

export default function App () {
    const [token, setToken] = useState(null);
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path='/' />
                <Route element={<Login/>} path='/Login' />
                <Route element={<Dashboard/>} path='/Dashboard' />
            </Routes>
        </BrowserRouter>
    )
}