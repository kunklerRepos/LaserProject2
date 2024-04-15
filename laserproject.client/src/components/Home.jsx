import React from 'react';
//import styles from './styles/Home.component.css';

function Home()
{
    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">

            <button type="button" style={{ marginBottom: "5%", width: "50%" }} className="btn btn-primary">New Job</button>
           
            <button type="button" style={{ marginBottom: "5%", width: "50%" }} className="btn btn-primary">Current Orders</button>
            
            <button type="button" style={{ marginBottom: "5%", width: "50%" }} className="btn btn-primary">View Order History</button>

        </div>
    )
}

export default Home;