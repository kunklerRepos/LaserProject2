import React from 'react';

function JobMenu()
{
    return (
        <div>
            <h2>Job Options</h2>
            <div style={{marginTop: "5%"}}>
                <div className="d-flex justify-content-center">
                    <button type="button" style={{ marginBottom: "1%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary">Client Feedback/Design Proofs</button>
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
                    <button type="button" style={{ marginBottom: "1%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary">Select Materials</button>
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
                    <button type="button" style={{ marginBottom: "1%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary">Marketing</button>
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
                    <button type="button" style={{ marginBottom: "1%", width: "50%", height: "80px", backgroundColor: "#43769B" }} className="btn btn-primary">Additional Costs</button>
                </div>
            </div>
        </div>
    )
}

export default JobMenu;