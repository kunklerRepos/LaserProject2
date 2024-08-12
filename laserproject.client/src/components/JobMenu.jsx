import React from 'react';
import { useNavigate } from 'react-router-dom';





function JobMenu()
{
    const navigate = new useNavigate();

    const goToFeedbackProofs = () => { navigate("/FeedBackProofs")}
    const goToSelectMaterials = () => { navigate("/SelectMaterials")}
    const goToSelectMarketing = () => { navigate("/SelectMarketing")}
    const goToSelectAdditionalCost = () => { navigate("/SelectAdditionalCosts") }


    return (
        <div>
            <h2>Job Options</h2>
            <div style={{marginTop: "5%"}}>
                <div className="d-flex justify-content-center">
                    <button onClick={ goToFeedbackProofs } type="button" style={{ marginBottom: "1%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary">Client Feedback/Design Proofs</button>
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
                    <button onClick={goToSelectMaterials} type="button" style={{ marginBottom: "1%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary">Select Materials</button>
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
                    <button onClick={goToSelectMarketing} type="button" style={{ marginBottom: "1%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary">Marketing</button>
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
                    <button onClick={goToSelectAdditionalCost} type="button" style={{ marginBottom: "1%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary">Additional Costs</button>
                </div>
            </div>
        </div>
    )
}

export default JobMenu;