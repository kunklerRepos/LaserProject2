import React, { Fragment, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function SelectAdditionalCosts()
{
    const navigate = useNavigate();
    const backBtnClickHandler = () => {navigate("/JobMenu")}
    const saveBtnClickHandler = () => {navigate("/JobMenu") }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleSave = () => {
        let selectedVal = document.getElementById("AdditionalCostSelect");

        let targetValues = AdditionalCostObject[selectedVal.value];

        addItem(targetValues, selectedVal.value);
        console.log(additionalCost);
        handleClose();
    }

    const handleShow = () => setShow(true);

    const AdditionalCostObject = {
        "AdditionalCost #1": ["7.50", "10.10", "0.15"],
        "AdditionalCost #2": ["5.50", "8.50", "0.06"],
        "AdditionalCost #3": ["3.50", "5.50", "0.14"]

    };

    const SelectedAdditionalCostObject = {};

    const [additionalCost, setAdditionalCost] = useState(SelectedAdditionalCostObject);


    const addItem = (value, key) => {
        setAdditionalCost(additionalCost => {
            let copy = Object.assign({}, additionalCost)
            copy[key] = value;
            return copy;
        })
    }

    const removeItem = (value, e) => {
        console.log(value);
        let copiedMaterials = { ...additionalCost };
        delete copiedMaterials[value];
        setAdditionalCost(additionalCost => ({
            ...copiedMaterials

        }));
    }





    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body className="justify-content-center d-flex">
                    <select id="AdditionalCostSelect" style={{ marginBottom: "5%", width: "75%" }} className="form-control">
                        <option value="AdditionalCost #1">Additional Cost 1</option>
                        <option value="AdditionalCost #2">Additional Cost 2</option>
                        <option value="AdditionalCost #3">Additional Cost 3</option>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <h2>Select Additional Costs</h2>
            <div className="justify-content-center" >
                <button variant="primary" onClick={handleShow} type="button" className="btn btn-primary">Add Additional Cost</button>
            </div>
            <br></br>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" colSpan="2" >Marketing Material</th>
                        <th scope="col" >Unit Cost</th>
                        <th scope="col">Quantity</th>
                        <th scope="col" ></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(additionalCost).map((item, index) => {

                        return (
                            <Fragment>
                                <tr key={index}>
                                    <td scope="row">{index + 1}</td>
                                    <td colSpan="2">{item}</td>
                                    <td >{`$${additionalCost[item][0]}`}</td>
                                    <td><input className="form-control" type="number"></input></td>
                                    <td><a onClick={(e) => removeItem(item, e)}><i className="fa fa-trash-o"></i></a></td>
                                </tr>
                            </Fragment>
                        )


                    })}

                </tbody>
            </table>


            <button onClick={backBtnClickHandler} style={{ marginRight: "2%", backgroundColod: "white", color: "#1b6ec2", border: "1px solid #1b6ec2" }} type="button" className="btn">Cancel</button>
            <button onClick={saveBtnClickHandler} type="button" className="btn btn-primary">Save</button>
        </>
    )
}


export default SelectAdditionalCosts;