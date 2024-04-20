import React from 'react';
import './styles/Home.component.css';
//import styles from './styles/Home.component.css';

function Home()
{
    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">

            <button type="button" style={{ marginBottom: "3%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary btnEffects">New Job</button>
           
            <button type="button" style={{ marginBottom: "3%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary">Current Orders</button>
            
            <button type="button" style={{ marginBottom: "3%", width: "50%", height: "80px", backgroundColor: "#43769B"}} className="btn btn-primary">View Order History</button>

        </div>
    )
}

export default Home;