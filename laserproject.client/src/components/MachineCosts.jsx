import React, { Fragment, useState } from 'react';


function MachineCosts()
{

    const MachiningCosts = { "Laser Operating Cost": "0.11" };


    return (
        <>
            <h2>Machine Costs</h2>
            <br />
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" colspan="2" >Cost Type</th>
                        <th scope="col" >Electric Cost</th>
                        <th scope="col" > <a style={{ marginLeft: '2%' }} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal" href="#" >+</a> </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(MachiningCosts).map((item, index) => {
                        return (
                            <Fragment>
                                <tr>
                                    <td scope="row">{index + 1}</td>
                                    <td colspan="2">{item}</td>
                                    <td>{`$${MachiningCosts[item]}`}</td>
                                    <td><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                </tr>

                            </Fragment>
                        )

                    })}



                </tbody>
            </table>
        </>
    )
}

export default MachineCosts;