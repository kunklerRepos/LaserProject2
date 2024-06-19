import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



function NewEntryComponent()
{

    const BackNav = {"Materials": "/Materials"};

    const location = useLocation();
    const navigation = useNavigate();

    const navigateBack = () => { navigation(BackNav[location.state.EntryType]) };
    console.log(location);

    return (
        <>
            <h2>{location.state.EntryType}</h2>
            <br></br>

            <div style={{ display: "flex" }} className="d-flex justify-content-center" >
                <label for="itemName" className="form-label">
                    Name</label>
            </div>
            <div style={{display: "flex"}} className="d-flex justify-content-center">
                <input type="text" id="itemName" style={{width: "50%"}} className="form-control" name="itemName" label="ItemName" />
            </div>
            <br />
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <label for="cost" className="form-label">
                Cost for Piece</label>
            </div>
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <input type="number" id="cost" style={{ width: "50%" }} className="form-control" min="0.00" step="0.01" name="cost" label="Cost"/>
            </div>

            <br/>

            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <label for="costQty" className="form-label">Cost Per Qty</label>
            </div>
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <input type="number" id="costQty" className="form-control" style={{ width: "50%" }} min="0.00" step="0.01" name="costQty" label="CostQty"/>
            </div>

            <br />
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <label for="taxShipping" className="form-label">Tax + Shipping</label>
            </div>

            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <input id="taxShipping" name="taxShipping" label="TaxShipping" type="number" min="0.00" step="0.01" style={{width: "50%"}} className="form-control" />
            </div>
            <br/>
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <button onClick={() => navigateBack()} className="btn btn-secondary" style={{ width: "22%", marginRight: "3%"}}>CANCEL</button>

                <button className="btn btn-primary" style={{ width: "22%", marginLeft: "3%"}}>SAVE</button>
            </div>

        </>
    )
}


export default NewEntryComponent;