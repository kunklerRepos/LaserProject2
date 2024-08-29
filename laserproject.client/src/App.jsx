import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes.jsx';
import Layout from './components/Layout.jsx';
import './App.css';
import Home from './components/Home.jsx';

function App() {

    const password = "swordfish";
    const emailUser = "Trevor@me.com"
    const [authorized, setAuthorized] = useState(false);

    const handleSubmit = (e) => {


        const enteredPassword = e.target.querySelector('input[type="password"]').value;
        const enteredUserName = e.target.querySelector('input[type="email"]').value;

        const isPassAuth = enteredPassword == password;
        const isUserAuth = enteredUserName == emailUser;
        const auth = isPassAuth && isUserAuth;
        setAuthorized(auth)

    }
    /** <form action='#' onSubmit={handleSubmit}>
            <input type='text' placeholder='username/email'/>
            <input type='password' placeholder='Password' />
            <input type='submit' />
        </form> */


    const login = (
        <form action="#" onSubmit={ handleSubmit} style={{marginTop: "20%"}}>
            <div className="d-flex justify-content-center align-item-center">
            <div className="mb-3" style={{ width: "50%"}}>
                <label htmlFor="UserInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="UserInputEmail1" aria-describedby="emailHelp"/>
                   
                </div>
            </div>
            <div className="d-flex justify-content-center align-item-center">
                 <div className="mb-3" style={{width: "50%"}}>
                    <label htmlFor="UserInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="UserInputPassword1"/>
                 </div>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
    




    const layout = (
        <Layout>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        </Layout>
    );

    return (
        <div id="authorization">
            {authorized ? layout : login}
        </div>
        
   )
}

export default App;