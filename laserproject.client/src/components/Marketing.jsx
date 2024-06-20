import React, { Fragment, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function Marketing()
{

    const navigate = useNavigate();
    const location = useLocation();


    const goToAddMarketing = () => {
        navigate("/NewEntryComponent", { state: {"EntryType": "Marketing"}})
    }

    const MarketingObj = {
        "Item 1": "0.50",
        "Item 2": "1.00",
        "Item 3": "0.75"

    };

    if (location.state)
    {
        MarketingObj[location.state.name] = location.state.costPiece;
    }

    const [marketing, setMarketing] = useState(MarketingObj);


    const removeItems = (value, e) =>
    {
        let copiedMarketing = { ...marketing };
        delete copiedMarketing[value];
        setMarketing(marketing => ({
            ...copiedMarketing
        }));
    }



    return (
        <>
            <h2>Marketing</h2>
            <br />
            <table className="table table-hover table-bordered">
                <thead>
                   <tr>
                        <th scope="col">#</th>
                        <th scope="col" colspan="2" >Item</th>
                        <th scope="col" >Unit Cost</th>
                        <th scope="col" > <a onClick={() => goToAddMarketing()} style={{ marginLeft: '2%' }} className="w3-button w3-small w3-circle w3-small w3-ripple w3-teal" >+</a> </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(marketing).map((item, index) => {
                        return (
                            <Fragment>
                                <tr>
                                    <td scope="row">{index + 1}</td>
                                    <td colspan="2">{item}</td>
                                    <td>{`$${marketing[item]}`}</td>
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

export default Marketing;