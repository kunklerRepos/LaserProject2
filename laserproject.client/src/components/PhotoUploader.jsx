import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PhotoUploader()
{
    const [uploadImg, setUploadImg] = useState();

    const handleChange = (e) => {
        setUploadImg(URL.createObjectURL(e.target.files[0]));
    } 

    const navigate = useNavigate();

    const handBackClick = (e) => { navigate("/FeedbackProofs") }

    const handUploadClick = (e) => {navigate("/FeedbackProofs") }

    return (<>
        <h2>Photo Upload</h2>

        <div className="d-flex justify-content-center">
            <input type="file" onChange={handleChange} />
        </div>
        <div className="d-flex justify-content-center" >
            <img src={uploadImg} style={{minHeight: "400px", width: "50%", height: "50%", border: "1px solid", padding: "5px"}} />
        </div>
        <div className="d-flex justify-content-center">
            <button onClick={handBackClick} style={{ marginRight: "6%", width: "22%" }} className="btn btn-secondary">Back</button>
            <button onClick={handUploadClick} style={{width: "22%"}} className="btn btn-primary">Upload</button>
        </div>
    </>);
}

export default PhotoUploader;