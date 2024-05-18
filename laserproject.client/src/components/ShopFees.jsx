import React, { Fragment, useState } from 'react';

function ShopFees()
{
    const ShopFeeObj = {
        "Total Machining": "1.04"
    };

    return (
        <>
            <h2>Shop Fees</h2>
            <br />
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" colspan="2" >Cost Type</th>
                        <th scope="col" >Fee Total</th>
                        <th scope="col" > <a style={{ marginLeft: '2%' }} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal" href="#" >+</a> </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(ShopFeeObj).map((item, index) => {
                        return (
                            <Fragment>
                                <tr>
                                    <td scope="row">{index + 1}</td>
                                    <td colspan="2">{item}</td>
                                    <td>{`$${ShopFeeObj[item]}`}</td>
                                    <td><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                </tr>

                            </Fragment>
                        )

                    })}
                </tbody>
            </table>
        </>
    );
}

export default ShopFees