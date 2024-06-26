import React, { Fragment, useState } from 'react';
import ItemInput from './ItemInput';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles/Materials.component.css';

function Materials()
{


    const navigate = useNavigate();
    const location = useLocation();

    const goToAddMaterials = () => { navigate("/NewEntryComponent", { state: { "EntryType": "Materials" } }) }
    const goToEditingMaterials = (item) => { navigate("/NewEntryComponent", { state: { "EntryType": "Materials", "name": item, "entity": material[item] } })}


    const MaterialObject = {
        "Material #1": ["7.50", "10.10", "0.15"],
        "Material #2": ["5.50", "8.50", "0.06"],
        "Material #3": ["3.50", "5.50", "0.14"]

    };

    if (location.state)
    {
        MaterialObject[location.state.name] = location.state.costPiece;
    }



    const [material, setMaterial] = useState(MaterialObject);

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
            <h2>Materials</h2>
            <br />
            <div id="ListMaterials">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" colSpan="2" >Material</th>
                            <th scope="col" >Unit Cost</th>
                            <th scope="col" > <a style={{ marginLeft: '2%' }} onClick={() => goToAddMaterials()} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal">+</a> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(material).map((item, index) => {
                            return (
                                <Fragment>
                                    <tr key={index}>
                                        <td onClick={() => goToEditingMaterials(item)} scope="row">{index + 1}</td>
                                        <td onClick={() => goToEditingMaterials(item)} colSpan="2">{item}</td>
                                        <td onClick={() => goToEditingMaterials(item)}>{`$${material[item][0]}`}</td>
                                        <td><a onClick={(e) => removeItem(item, e) }><i className="fa fa-trash-o"></i></a></td>
                                    </tr>

                                </Fragment>
                            )

                        }) }

                        
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default Materials;