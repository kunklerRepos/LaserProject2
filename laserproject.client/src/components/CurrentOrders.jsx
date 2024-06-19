import React, { Fragment, useState } from 'react';

import { useNavigate } from 'react-router-dom';


function CurrentOrders()
{
    const navigate = useNavigate();
    const navigatetoJobMenu = () => { navigate("/JobMenu") };

    const customersObj = {
        "Tom Jones": {"ItemNo": 14352, "Item Desc": "Custom Print", "Date": "05/03/2024"},
        "Sarah Sattler": {"ItemNo": 14353, "Item Desc": "Custom Print", "Date": "05/16/2024"},
        "James Stanforth": {"ItemNo": 14354, "Item Desc": "Custom Print", "Date": "05/26/2024"}

    };


    return (
        <>
            <h2>Current Orders</h2>

          
                <br />
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Item #</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Object.keys(customersObj).map((key) => {
                            return (
                                <Fragment>
                                    <tr onClick={() => { navigatetoJobMenu() }}>
                                        <td scope="row">{customersObj[key]["ItemNo"]}</td>
                                        <td>{key}</td>
                                        <td>{customersObj[key]["Item Desc"]}</td>
                                        <td>{customersObj[key]["Date"]}</td>
                                    </tr>

                                </Fragment>
                            )

                        })}
                    </tbody>
                </table>
            
        </>
    )
}


export default CurrentOrders;