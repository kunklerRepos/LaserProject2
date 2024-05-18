import React, { Fragment, useState } from 'react';

function Shipping()
{

    const ShippingObj = {"Item 1": "5.00", "Item 2": "3.00"};


    return (
        <>
            <h2>Shipping Supplies</h2>
            <br />

            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" colspan="2" >Items</th>
                        <th scope="col" >Unit Cost</th>
                        <th scope="col" > <a style={{ marginLeft: '2%' }} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal" href="#" >+</a> </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(ShippingObj).map((item, index) => {
                        return (
                            <Fragment>
                                <tr>
                                    <td scope="row">{index + 1}</td>
                                    <td colspan="2">{item}</td>
                                    <td>{`$${ShippingObj[item]}`}</td>
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

export default Shipping;