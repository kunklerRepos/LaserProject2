import React, { Fragment, useState } from 'react';


function Marketing()
{

    const MarketingObj = {
        "Item 1": "0.50",
        "Item 2": "1.00",
        "Item 3": "0.75"

    };

    return (
        <>
            <h2>Marketing</h2>
            <br />
            <table className="table table-hover table-bordered">
                <thead>
                   <tr>
                        <th scope="col">#</th>
                        <th scope="col" colspan="2" >Item</th>
                        <th scope="col" >Unit Cost</th>
                        <th scope="col" > <a style={{ marginLeft: '2%' }} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal" href="#" >+</a> </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(MarketingObj).map((item, index) => {
                        return (
                            <Fragment>
                                <tr>
                                    <td scope="row">{index + 1}</td>
                                    <td colspan="2">{item}</td>
                                    <td>{`$${MarketingObj[item]}`}</td>
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

export default Marketing;