import React, { Fragment, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

function LaborCost()
{
    const navigate = useNavigate();

    const goToAddLabor = () => { navigate("/AddLaborCosts") }
    const location = useLocation();

    const LaborCostObj = {"Labor Type 1": "10.00", "Labor Type 2": "12.00", "Labor Type 3": "14.50"};

    if (location.state)
    {
        LaborCostObj[location.state.name] = location.state.hourlyRate;
    }

    const [labor, setLabor] = useState(LaborCostObj);

    const removeItems = (value, e) => {
        let copiedLabor = { ...labor };
        delete copiedLabor[value];
        setLabor(labor => ({
            ...copiedLabor
        }));
    }



    return (
        <>
            <h2>Labor Costs</h2>
            <br />
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" colspan="2" >Labor Type</th>
                        <th scope="col" >Cost</th>
                        <th scope="col" > <a onClick={() => goToAddLabor()} style={{ marginLeft: '2%' }} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal">+</a> </th>
                    </tr>
                </thead>
                <tbody>

                    {Object.keys(labor).map((item, index) => {
                        return (
                            <Fragment>
                                <tr key={index }>
                                    <td scope="row">{index + 1}</td>
                                    <td colspan="2">{item}</td>
                                    <td>{`$${labor[item]}`}</td>
                                    <td><a onClick={(e) => removeItems(item, e) }><i className="fa fa-trash-o"></i></a></td>
                                </tr>

                            </Fragment>
                        )

                    })}


                </tbody>
            </table>
        </>
    );
}

export default LaborCost;