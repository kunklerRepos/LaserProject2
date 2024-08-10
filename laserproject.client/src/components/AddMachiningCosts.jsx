import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AddMachiningCosts()
{
    const [name, setName] = useState();
    const [costkWh, setCostkWh] = useState();
    const [maxPower, setMaxPower] = useState();
    const [hourlyRate, setHourlyRate] = useState();
    const [numHours, setNumHours] = useState();

    const location = useLocation();
    const navigation = useNavigate();

    const navigateBack = () => { navigation("/MachineCosts") };

    const navigateSave = () => {
        navigation("/MachineCosts", {
            state: {
                "name": name,
                "costkWh": costkWh,
                "maxPower": maxPower,
                "hourlyRate": hourlyRate,
                "numHours": numHours
            }
        })
    };

    return (
        <>
            <h2>Machining Costs</h2>
            <br></br>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <label htmlFor="name" className="form-label">Name</label>
            </div>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <input placeholder={ location.state?.name ? location.state?.name : ""} onChange={(e) => setName(e.currentTarget.value)} type="text" name="name" id="name" label="Name" className="form-control" style={{ width: "50%" }} />
            </div>
            <br></br>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <label htmlFor="costkWh" className="form-label">Electric Cost per kWh</label>
            </div>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <input placeholder={ location.state?.name ? location.state?.entity[0] : ""} onChange={(e) => setCostkWh(e.currentTarget.value)} style={{ width: "50%" }} min="0.01" step="0.01" type="number" id="costkWh" name="costkWh" label="costkWh" className="form-control" />
            </div>

            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <label htmlFor="maxPower" className="form-label">Max Power Consumption</label>
            </div>
            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <input placeholder={ location.state?.name ? location.state?.entity[1] : "" } onChange={(e) => setMaxPower(e.currentTarget.value)} name="maxPower" id="maxPower" label="maxPower" type="number" min="0.01" step="0.01" className="form-control" style={{ width: "50%" }} />
            </div>

            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <label htmlFor="hourlyRate" className="form-label">Hourly Rate</label>
            </div>

            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <input placeholder={location.state?.name ? location.state?.entity[2] : "" } style={{ width: "50%" }} onChange={(e) => setHourlyRate(e.currentTarget.value)} className="form-control" type="number" id="hourlyRate" name="hourlyRate" label="hourlyRate" min="0.00" step="0.01" />
            </div>

            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <label htmlFor="numHours" className="form-label">Number of Hours</label>
            </div>

            <div className="d-flex justify-content-center" style={{ display: "flex" }}>
                <input placeholder={ location.state?.name ? location.state?.entity[3] : ""}  style={{ width: "50%" }} onChange={(e) => setNumHours(e.currentTarget.value)} className="form-control" type="number" id="numHours" name="numHours" label="numHours" min="0.00" step="0.5" />
            </div>

            <br />
            <div style={{ display: "flex" }} className="d-flex justify-content-center">
                <button onClick={() => navigateBack()} className="btn btn-secondary" style={{ width: "22%", marginRight: "3%" }}>CANCEL</button>

                <button onClick={() => navigateSave()} className="btn btn-primary" style={{ width: "22%", marginLeft: "3%" }}>SAVE</button>
            </div>


        </>
    )
}

export default AddMachiningCosts;