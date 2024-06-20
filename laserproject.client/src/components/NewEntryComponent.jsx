import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



function NewEntryComponent()
{
    const [name, setName] = useState();
    const [costPiece, setCostPiece] = useState();
    const [costQty, setCostQty] = useState();
    const [tax, setTax] = useState();
    

    const BackNav = {
        "Materials": "/Materials", "Shipping Material": "/Shipping",
        "Marketing": "/Marketing"
    };

    const location = useLocation();
    const navigation = useNavigate();

    const navigateBack = () => { navigation(BackNav[location.state.EntryType]) };

    const navigateSave = () => {

        navigation(BackNav[location.state.EntryType], {
            state: {
                "name": name, "costQty": costQty,
                "costPiece": costPiece, "tax": tax
            }
        })
    }
    console.log(location);

    return (
        <>
            <h2>{location.state.EntryType}</h2>
            <br></br>

            <div style={{ display: "flex" }} className="d-flex justify-content-center" >
                <label for="itemName" className="form-label">
                    Name</label>
            </div>
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <input type="text" onChange={(e) => setName(e.currentTarget.value)} id="itemName" style={{ width: "50%" }} className="form-control" name="itemName" label="ItemName" />
            </div>
            <br />
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <label for="cost" className="form-label">
                Cost for Piece</label>
            </div>
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <input type="number" onChange={(e) => setCostPiece(e.currentTarget.value)} id="cost" style={{ width: "50%" }} className="form-control" min="0.00" step="0.01" name="cost" label="Cost" />
            </div>

            <br/>

            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <label for="costQty" className="form-label">Cost Per Qty</label>
            </div>
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <input onChange={(e) => setCostQty(e.currentTarget.value)} type="number" id="costQty" className="form-control" style={{ width: "50%" }} min="0.00" step="0.01" name="costQty" label="CostQty" />
            </div>

            <br />
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <label for="taxShipping" className="form-label">Tax + Shipping</label>
            </div>

            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <input id="taxShipping" onChange={(e) => setTax(e.currentTarget.value)} name="taxShipping" label="TaxShipping" type="number" min="0.00" step="0.01" style={{ width: "50%" }} className="form-control" />
            </div>
            <br/>
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <button onClick={() => navigateBack()} className="btn btn-secondary" style={{ width: "22%", marginRight: "3%"}}>CANCEL</button>

                <button onClick={() => navigateSave()} className="btn btn-primary" style={{ width: "22%", marginLeft: "3%" }}>SAVE</button>
            </div>

        </>
    )
}


export default NewEntryComponent;