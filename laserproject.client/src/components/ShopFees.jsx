import React, { Fragment, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ShopFees()
{

    const navigate = useNavigate();
    const location = useLocation();

    const goToAddShopFee = () => { navigate("/AddShopFee") }


    const ShopFeeObj = {
        "Total Machining": "1.04"
    };



    if (location.state)
    {
        ShopFeeObj[location.state.chooseCost] = location.state.shopFee;
    }

    const [shopFee, setShopFee] = useState(ShopFeeObj);

    const removeItems = (value, e) => {
        let copiedShopFee = { ...shopFee };
        delete copiedShopFee[value];
        setShopFee(shopFee => ({
            ...copiedShopFee
        }));
    }

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
                        <th scope="col" > <a onClick={() => goToAddShopFee()} style={{ marginLeft: '2%' }} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal" >+</a> </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(shopFee).map((item, index) => {
                        return (
                            <Fragment>
                                <tr>
                                    <td scope="row">{index + 1}</td>
                                    <td colspan="2">{item}</td>
                                    <td>{`$${shopFee[item]}`}</td>
                                    <td><a onClick={(e) => removeItems(item, e)}><i className="fa fa-trash-o"></i></a></td>
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