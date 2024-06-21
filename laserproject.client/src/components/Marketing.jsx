import React, { Fragment, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function Marketing()
{

    const navigate = useNavigate();
    const location = useLocation();


    const goToAddMarketing = () => {
        navigate("/NewEntryComponent", { state: {"EntryType": "Marketing"}})
    }

    const goToEditMarketing = (item) => {
        navigate("/NewEntryComponent", { state: { "EntryType": "Marketing", "name": item, "entity": marketing[item] } })
    }

    const MarketingObj = {
        "Item 1": ["0.50", "5.00","0.14"],
        "Item 2": ["1.00", "3.50", "1.20"],
        "Item 3": ["0.75", "8.43", "3.23"]

    };

    if (location.state)
    {
        MarketingObj[location.state.name] = [location.state.costPiece, location.state.costQty, location.state.tax];
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
                                <tr >
                                    <td onClick={() => goToEditMarketing(item)} scope="row">{index + 1}</td>
                                    <td onClick={() => goToEditMarketing(item)}  colspan="2">{item}</td>
                                    <td onClick={() => goToEditMarketing(item)} >{`$${marketing[item][0]}`}</td>
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