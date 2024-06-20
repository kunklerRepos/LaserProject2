import React, { Fragment, useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

function Shipping()
{
    const location = useLocation();
    const navigate = useNavigate();

    const goToAddShipping = () => { navigate("/NewEntryComponent", { state: { "EntryType": "Shipping Material" } }) };

    const ShippingObj = {"Item 1": "5.00", "Item 2": "3.00"};

    if (location.state)
    {
        ShippingObj[location.state.name] = location.state.costPiece;
    }

    const [shipping, setShipping] = useState(ShippingObj);

    const removeItem = (value, e) =>
    {
        let copiedShipping = { ...shipping };
        delete copiedShipping[value];
        setShipping(shipping => ({
            ...copiedShipping
        }));
    }


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
                        <th scope="col" > <a onClick={() => goToAddShipping()} style={{ marginLeft: '2%' }} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal" >+</a> </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(shipping).map((item, index) => {
                        return (
                            <Fragment>
                                <tr key={index }>
                                    <td scope="row">{index + 1}</td>
                                    <td colspan="2">{item}</td>
                                    <td>{`$${shipping[item]}`}</td>
                                    <td><a onClick={(e) => removeItem(item, e)}><i className="fa fa-trash-o"></i></a></td>
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