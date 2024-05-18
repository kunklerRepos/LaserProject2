import React, { Fragment, useState } from 'react';

function LaborCost()
{

    const LaborCostObj = {"Labor Type 1": "10.00", "Labor Type 2": "12.00", "Labor Type 3": "14.50"};
    return (
        <>
            <h2>Labor Costs</h2>
            <br />
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" colspan="2" >Labor Type</th>
                        <th scope="col" >Cost</th>
                        <th scope="col" > <a style={{ marginLeft: '2%' }} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal" href="#" >+</a> </th>
                    </tr>
                </thead>
                <tbody>

                    {Object.keys(LaborCostObj).map((item, index) => {
                        return (
                            <Fragment>
                                <tr>
                                    <td scope="row">{index + 1}</td>
                                    <td colspan="2">{item}</td>
                                    <td>{`$${LaborCostObj[item]}`}</td>
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

export default LaborCost;