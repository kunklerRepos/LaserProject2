import React, { Fragment, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function MachineCosts()
{
    const navigate = useNavigate();

    const goToAddMachineCost = () => { navigate("/AddMachiningCosts") }

    const MachiningCosts = { "Laser Operating Cost": "0.11" };

    const location = useLocation();

    if (location.state)
    {
        console.log(location);
        MachiningCosts[location.state.name] = location.state.costkWh;
    }


    const [machineCost, setMachineCost] = useState(MachiningCosts);

    console.log(machineCost);
    const removeItems = (value, e) => {
        let copiedMachingCosts = { ...machineCost };
        delete copiedMachingCosts[value];
        setMachineCost(machineCost => ({
            ...copiedMachingCosts
        }));
    }


    return (
        <>
            <h2>Machine Costs</h2>
            <br />
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" colSpan="2">Cost Type</th>
                        <th scope="col" >Electric Cost</th>
                        <th scope="col" > <a onClick={() => goToAddMachineCost()} style={{ marginLeft: '2%' }} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal" >+</a> </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(machineCost).map((item, index) => {
                        return (
                            <Fragment>
                                <tr key={index}>
                                    <td scope="row">{index + 1}</td>
                                    <td colSpan="2">{item}</td>
                                    <td>{`$${machineCost[item]}`}</td>
                                    <td><a onClick={(e) => removeItems(item, e)}><i className="fa fa-trash-o"></i></a></td>
                                </tr>

                            </Fragment>
                        )

                    })}

                </tbody>
            </table>
        </>
    )
}

export default MachineCosts;