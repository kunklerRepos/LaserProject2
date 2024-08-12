import React from 'react';

function UserResponse(props)
{
    return (
        <>
            <div className="card" style={{ maxWidth: "50%", marginLeft: "50%", marginRight: "1%", marginTop: "1%" }}>
                <div className="card-header" style={{ backgroundColor: "#1b6ec2", color: "white" }}>
                    { props.name }
                </div>
                <div className="card-body">
                    <h5 className="card-title">{ props.cardTitle }</h5>
                    <p className="card-text"> { props.cardText } </p>
                    <footer className="blockquote-footer"> { props.cardDate } </footer>
                </div>
            </div>
        </>
    )
}
export default UserResponse;