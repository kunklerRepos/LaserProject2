import React from 'react';
import { useNavigate } from 'react-router-dom';

function SelectMaterial()
{
    const navigate = useNavigate();

    const backBtnClickHandler = () => { navigate("/JobMenu"); }
    const saveBtnClickHandler = () => {navigate("/JobMenu")}
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="justify-content-center d-flex">
                                <select id="MaterialSelect" style={{ marginBottom: "5%", width: "75%" }} className="form-control"></select>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>



            <h2>Select Material</h2>
            <br></br>
            <div className="justify-content-center" >
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className="btn btn-primary">Add Material</button>
            </div> 
            <br></br>
                <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" colSpan="2" >Material</th>
                        <th scope="col" >Unit Cost</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <button onClick={backBtnClickHandler} style={{ marginRight: "2%", backgroundColod: "white", color: "#1b6ec2", border: "1px solid #1b6ec2" }} type="button" className="btn">Cancel</button>
            <button onClick={saveBtnClickHandler} type="button" className="btn btn-primary">Save</button>
        </>
    );
}

export default SelectMaterial;