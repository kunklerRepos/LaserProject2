import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientResponse from './ClientResponse';
import UserResponse from './UserResponse';

function FeedbackProofs()
{
    const data = [
        {
            "type": "Client",
            "name": "Client 1",
            "cardTitle": "Special Comment on last Upload",
            "cardText": "There was an issue with that last input you gave me.",
            "cardDate": "8/11/2024 15:37"
        },
        {
            "type": "User",
            "name": "Admin",
            "cardTitle": "Re: Special Comment on last Upload",
            "cardText": "Please see the attached job proof. I went ahead and fixed the problem",
            "cardDate": "8/11/2024 17:43"
        },
        {
            "type": "Client",
            "name": "Client 1",
            "cardTitle": "Thank you!",
            "cardText": "I see that the issue was resolved",
            "cardDate": "8/11/2024 18:00"
        }

    ]
   

    const navigate = useNavigate();

    const handlePickFile = () => { navigate("/PhotoUploader") }
    const goBackHandler = () => {navigate("/JobMenu") }

    const [adminResponse, setAdminResponse] = useState([...data]);

    const submitHandler = () => {

        let titleInput = document.getElementById("textTitle");
        let textInput = document.getElementById("textArea");
        let date = new Date();
        let responseObject = {
            "type": "User",
            "name": "Admin",
            "cardTitle": titleInput.value,
            "cardText": textInput.value,
            "cardDate": `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        };

        //let copiedAdminResponse = [ ...adminResponse ];
        //copiedAdminResponse.push(responseObject);
        console.log(adminResponse);
        setAdminResponse([...adminResponse, responseObject]);
        
    }

    return (<>
        <h2>Customer Feedback</h2>
        <div className="justify-content-end d-flex" style={{width: "90%"}}>
            <button onClick={ handlePickFile } className="btn btn-primary" style={{marginBottom: "1%"}}> Upload Photos/Docs</button>
        </div>
        <div className="justify-content-center" style={{ width: "75%", marginLeft: "15%", overflowY: "scroll" ,height: "300px", border: "1px solid" }}>
            {adminResponse.map(obj => {
                if (obj["type"] === "User") {


                    return (
                        <Fragment>
                            <UserResponse name={obj["name"]} cardTitle={obj["cardTitle"]}
                                cardText={obj["cardText"]} cardDate={obj["cardDate"]} />

                        </Fragment>);
                }
                else {
                    return (
                        <Fragment>
                            <ClientResponse name={obj["name"]} cardTitle={obj["cardTitle"]}
                                cardText={obj["cardText"]} cardDate={obj["cardDate"]} />
                        </Fragment>
                    );
                }


            })}

           
        </div>
            <input className="form-control" id="textTitle" type="text" style={{ marginTop: "1%", marginLeft: "15%", width: "75%" }} />
            <textarea id="textArea" className="form-control" style={{ marginTop: "1%", marginLeft: "15%", width: "75%" }} rows="3" />
            <div className="justify-content-end d-flex" style={{ width: "90%", marginTop: "1%" }}>
                <button onClick={goBackHandler} style={{ color: "#1b6ec2", backgroundColor: "white", border: "1px solid #1b6ec2", marginRight: "2%" }} className="btn">Back</button>
                <button onClick={submitHandler} className="btn btn-primary" >Submit</button>
            </div>
    </>)
}

export default FeedbackProofs;