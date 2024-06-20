import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AddShopFee()
{
    const [shopFee, setShopFee] = useState();
    const [chooseCost, setChooseCost] = useState("Total Labor");


    const onChooseCost = (e) => {
        console.log(e);
        setChooseCost(e.target.value);
    }

    const navigation = useNavigate();

    const navigateBack = () => { navigation("/ShopFees") };

    const navigateSave = () => { navigation("/ShopFees", {state: {"shopFee": shopFee, "chooseCost": chooseCost}}) }

    return (
        <>
            <h2>Shop Fee</h2>
            <br></br>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <label className="form-label">Choose Cost</label>
            </div>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <select onChange={(e) => onChooseCost(e)} className="form-select" style={{ width: "50%" }} id="costType" name="costType" label="CostType">
                    <option value="Total Labor">Total Labor</option>
                    <option value="Total Marketing">Total Marketing</option>
                </select>
            </div>
            <br></br>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <label className="form-label">Shop Fee</label>

            </div>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <input onChange={(e) => setShopFee(e.currentTarget.value)} style={{ width: "50%" }} min="0.00" step="0.01" type="number" id="shopFee" name="shopFee" label="ShopFee" className="form-control"></input>
            </div>
            <br></br>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <button onClick={() => navigateBack()} className="btn btn-secondary" style={{ width: "22%", marginRight: "3%" }}>CANCEL</button>

                <button onClick={() => navigateSave()} className="btn btn-primary" style={{ width: "22%", marginLeft: "3%" }}>SAVE</button>
            </div>
        </>
    )
}

export default AddShopFee;