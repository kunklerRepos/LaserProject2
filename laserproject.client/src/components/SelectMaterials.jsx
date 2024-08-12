import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SelectMaterial()
{
    const navigate = useNavigate();

    const backBtnClickHandler = () => { navigate("/JobMenu"); }
    const saveBtnClickHandler = () => { navigate("/JobMenu") }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleSave = () => {
        let selectedVal = document.getElementById("MaterialSelect");

        let targetValues = MaterialObject[selectedVal.value];
        
        addItem(targetValues, selectedVal.value);
        console.log(material);
        handleClose();
    }

    const handleShow = () => setShow(true);

    const MaterialObject = {
        "Material #1": ["7.50", "10.10", "0.15"],
        "Material #2": ["5.50", "8.50", "0.06"],
        "Material #3": ["3.50", "5.50", "0.14"]

    };

    const SelectedMaterialObject = {};

    const [material, setMaterial] = useState(SelectedMaterialObject);


    const addItem = (value, key) => {
        setMaterial(material => {
            let copy = Object.assign({}, material)
            copy[key] = value;
            return copy ;
        })
    }

    const removeItem = (value, e) => {
        console.log(value);
        let copiedMaterials = { ...material };
        delete copiedMaterials[value];
        setMaterial(material => ({
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
                    <select id="MaterialSelect" style={{ marginBottom: "5%", width: "75%" }} className="form-control">
                        <option value="Material #1">Material 1</option>
                        <option value="Material #2">Material 2</option>
                        <option value="Material #3">Material 3</option>
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

            <h2>Select Material</h2>
            <br></br>
            <div className="justify-content-center" >
                <button variant="primary" onClick={handleShow} type="button" className="btn btn-primary">Add Material</button>
            </div> 
            <br></br>
                <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" colSpan="2" >Material</th>
                        <th scope="col" >Unit Cost</th>
                        <th scope="col">Quantity</th>
                        <th scope="col" ></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(material).map((item, index)=> {

                        return (
                            <Fragment>
                                <tr key={index}>
                                    <td  scope="row">{index + 1}</td>
                                    <td  colSpan="2">{item}</td>
                                    <td >{`$${material[item][0]}`}</td>
                                    <td><input className="form-control" type="number"></input></td>
                                    <td><a onClick={(e) => removeItem(item, e)}><i className="fa fa-trash-o"></i></a></td>
                                </tr>

                            </Fragment>
                        )


                    }) }

                </tbody>
            </table>
            <button onClick={backBtnClickHandler} style={{ marginRight: "2%", backgroundColod: "white", color: "#1b6ec2", border: "1px solid #1b6ec2" }} type="button" className="btn">Cancel</button>
            <button onClick={saveBtnClickHandler} type="button" className="btn btn-primary">Save</button>
        </>
    );
}

export default SelectMaterial;