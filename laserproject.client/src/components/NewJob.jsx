import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewJob()
{
    const navigate = useNavigate();

    const backToHome = () => { navigate("/LaserProject2") }
    const toJobMenu = () => { navigate("/JobMenu") }

    return (
        <>
            <h2>New Job</h2>
            <br />
            <div style={{ display: "flex" }} className="d-flex justify-content-center" >
                <label for="customerName" className="form-label">
                    Name</label>
            </div>
            <div style={{display: "flex"}} className="d-flex justify-content-center">
                <input type="text" id="customerName" style={{width: "50%"}} className="form-control" name="customerName" label="CustomerName" />
            </div>
            <br />
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <label for="customerEmail" className="form-label">
                Email</label>
            </div>
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <input type="text" id="customerEmail" style={{ width: "50%" }} className="form-control" name="customerEmail" label="CustomerEmail"/>
            </div>

            <br/>

            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <label for="customerAddress" className="form-label">Address</label>
            </div>

            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <input type="text" id="customerAddress" className="form-control" style={{ width: "50%" }} name="customerAddress" label="CustomerAddress"/>
            </div>


            <br/>
            <div className="d-flex justify-content-center form-check">
                <input type="radio" name="ItemType" id="singleItem" />
                <label className="form-check-label" for="singleItem">Single Item</label>

            </div>

            <div className="d-flex justify-content-center form-check">
                <input className="form-check-input" type="radio" name="ItemType" id="wholeSaleItem" />
                    <label className="form-check-label" for="wholeSaleItem">
                        Whole Sale Item
                    </label>
            </div>


            <br />

            <div className="d-flex justify-content-center">
                <button type="button" onClick={() => backToHome() } className="btn btn-secondary">Cancel</button>
                <button type="button" onClick={() => toJobMenu() } className="btn btn-primary">Next</button>
            </div> 

            
        </>
    );

}

export default NewJob;