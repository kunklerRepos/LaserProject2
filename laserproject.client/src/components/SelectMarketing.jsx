import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SelectMarketing()
{

    const navigate = useNavigate();

    const backBtnClickHandler = () => {navigate("/JobMenu")}
    const saveBtnClickHandler = () => { navigate("/JobMenu") }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleSave = () => {
        let selectedVal = document.getElementById("MarketingSelect");

        let targetValues = MarketingObject[selectedVal.value];

        addItem(targetValues, selectedVal.value);
        console.log(marketing);
        handleClose();
    }

    const handleShow = () => setShow(true);

    const MarketingObject = {
        "Marketing #1": ["7.50", "10.10", "0.15"],
        "Marketing #2": ["5.50", "8.50", "0.06"],
        "Marketing #3": ["3.50", "5.50", "0.14"]

    };

    const SelectedMarketingObject = {};

    const [marketing, setMartketing] = useState(SelectedMarketingObject);


    const addItem = (value, key) => {
        setMartketing(marketing => {
            let copy = Object.assign({}, marketing)
            copy[key] = value;
            return copy;
        })
    }

    const removeItem = (value, e) => {
        console.log(value);
        let copiedMaterials = { ...marketing };
        delete copiedMaterials[value];
        setMartketing(marketing => ({
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
                    <select id="MarketingSelect" style={{ marginBottom: "5%", width: "75%" }} className="form-control">
                        <option value="Marketing #1">Marketing 1</option>
                        <option value="Marketing #2">Marketing 2</option>
                        <option value="Marketing #3">Marketing 3</option>
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
            <h2>Select Marketing Material</h2>
            <div className="justify-content-center" >
                <button variant="primary" onClick={handleShow} type="button" className="btn btn-primary">Add Marketing Material</button>
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
                    {Object.keys(marketing).map((item, index) => {

                        return (
                            <Fragment>
                                <tr key={index}>
                                    <td scope="row">{index + 1}</td>
                                    <td colSpan="2">{item}</td>
                                    <td >{`$${marketing[item][0]}`}</td>
                                    <td><input className="form-control" type="number"></input></td>
                                    <td><a onClick={(e) => removeItem(item, e)}><i className="fa fa-trash-o"></i></a></td>
                                </tr>

                            </Fragment>
                        )


                    })}

                </tbody>
            </table>
            <button onClick={backBtnClickHandler} style={{ marginRight: "2%", backgroundColod: "white", color: "#1b6ec2", border: "1px solid #1b6ec2" }} type="button" className="btn">Cancel</button>
            <button onClick={saveBtnClickHandler}  type="button" className="btn btn-primary">Save</button>
        </>
    );
}

export default SelectMarketing;