import React, { Fragment, useState } from 'react';

function OrderHistory()
{
    const customersObj = {
        "Carl Thompson": { "ItemNo": 12230, "Item Desc": "Custom Print", "Date": "04/13/2024" },
        "Sandra Jones": { "ItemNo": 12351, "Item Desc": "Custom Print", "Date": "04/12/2024" },
        "James Stanforth": { "ItemNo": 13354, "Item Desc": "Custom Print", "Date": "04/06/2024" }

    };


    return (
        <>
            <h2>Order History</h2>
            <br></br>

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
                                <tr >
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

export default OrderHistory;