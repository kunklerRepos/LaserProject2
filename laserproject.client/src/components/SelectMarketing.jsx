import React from 'react';
import { useNavigate } from 'react-router-dom';


function SelectMarketing()
{

    const navigate = useNavigate();

    const backBtnClickHandler = () => {navigate("/JobMenu")}
    const saveBtnClickHandler = () => { navigate("/JobMenu") }


    return (
        <>
            <h2>Select Marketing Material</h2>

            <button onClick={backBtnClickHandler} style={{ marginRight: "2%", backgroundColod: "white", color: "#1b6ec2", border: "1px solid #1b6ec2" }} type="button" className="btn">Cancel</button>
            <button onClick={saveBtnClickHandler}  type="button" className="btn btn-primary">Save</button>
        </>
    );
}

export default SelectMarketing;