import React, { Fragment, useState } from 'react';
import ItemInput from './ItemInput';
import './styles/Materials.component.css';

function Materials()
{
    const MaterialObject = {
        "Material #1": "7.50",
        "Material #2": "5.50",
        "Material #3": "3.50"

    };

    /**<tr>
                        <td scope="row">1</td>
                        <td colspan="2" >Material #1</td>
                        <td>$7.50</td>
                            <td><a href="#"><i className="fa fa-trash-o"></i></a></td>
                    </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td colspan="2">Material #2</td>
                            <td>$5.50</td>
                            <td><a href="#"><i className="fa fa-trash-o"></i></a></td>
                    </tr>
                        <tr>

                            <td scope="row">3</td>
                            <td colspan="2">Material #3</td>
                            <td>$3.50</td>
                            <td><a href="#"><i className="fa fa-trash-o"></i></a></td>
                    </tr>*/



    return (
        <>
            <h2>Materials</h2>
            <br />
            <div id="ListMaterials">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" colspan="2" >Material</th>
                            <th scope="col" >Unit Cost</th>
                            <th scope="col" > <a style={{ marginLeft: '2%' }} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal" href="#" >+</a> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(MaterialObject).map((item, index) => {
                            return (
                                <Fragment>
                                    <tr>
                                        <td scope="row">{index + 1}</td>
                                        <td colspan="2">{item}</td>
                                        <td>{`$${MaterialObject[item]}`}</td>
                                        <td><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                    </tr>

                                </Fragment>
                            )

                        }) }

                        
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default Materials;