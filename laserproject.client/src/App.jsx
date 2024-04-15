import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes.jsx';
import Layout from './components/Layout.jsx';
import './App.css';
import Home from './components/Home.jsx';

function App() {

    return (
        <Layout>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element = { element } />;
                })}
            </Routes>
        </Layout>
   )
}

export default App;