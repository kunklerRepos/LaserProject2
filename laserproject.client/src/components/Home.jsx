import React from 'react';
import './styles/Home.component.css';
import { useNavigate } from 'react-router-dom';

//import styles from './styles/Home.component.css';

function Home()
{
    const navigate = useNavigate();

    const goToCurrentOrders = () => { navigate("/CurrentOrders") };
    const goToNewJob = () => { navigate("/NewJob") }
    const goToOrderHistory = () => { navigate("/OrderHistory")};


    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">

            <button type="button" style={{ marginBottom: "3%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary btnEffects" onClick={() => goToNewJob()}>New Job</button>
           
            <button type="button" style={{ marginBottom: "3%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary" onClick={() => goToCurrentOrders()}>Current Orders</button>
            
            <button type="button" style={{ marginBottom: "3%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary" onClick={() => goToOrderHistory()}>View Order History</button>

        </div>
    )
}

export default Home;