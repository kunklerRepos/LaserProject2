import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function AddLaborCosts()
{
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [hourlyRate, setHourlyRate] = useState();
    const [numHours, setNumHours] = useState();

    const navigateBack = () => { navigate("/LaborCost") };

    const navigateSave = () => {
        navigate("/LaborCost", {
            state: {
                "name": name,
                "hourlyRate": hourlyRate,
                "numHours": numHours
            }
        })
    };




    return (
        <>
            <h2>Add Labor Cost</h2>
            <br></br>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <label htmlFor="name" className="form-label">Name</label>
            </div>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <input onChange={(e) => setName(e.currentTarget.value)} type="text" name="name" id="name" label="Name" className="form-control" style={{ width: "50%" }} />
            </div>
            <br></br>

            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <label htmlFor="hourlyRate" className="form-label">Hourly Rate</label>
            </div>

            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <input style={{ width: "50%" }} onChange={(e) => setHourlyRate(e.currentTarget.value)} className="form-control" type="number" id="hourlyRate" name="hourlyRate" label="hourlyRate" min="0.00" step="0.01" />
            </div>
            <br></br>

            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <label htmlFor="numHours" className="form-label">Number of Hours</label>
            </div>

            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <input style={{ width: "50%" }} onChange={(e) => setNumHours(e.currentTarget.value)} className="form-control" type="number" id="numHours" name="numHours" label="numHours" min="0.00" step="0.5" />
            </div>

            <br />

            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <button onClick={() => navigateBack()} className="btn btn-secondary" style={{ width: "22%", marginRight: "3%" }}>CANCEL</button>

                <button onClick={() => navigateSave()} className="btn btn-primary" style={{ width: "22%", marginLeft: "3%" }}>SAVE</button>
            </div>

        </>
    )
}

export default AddLaborCosts;