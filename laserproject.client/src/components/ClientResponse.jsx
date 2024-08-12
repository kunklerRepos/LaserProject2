import React from 'react';

function ClientResponse(props)
{
    return (
        <>
            <div className="card" style={{ maxWidth: "50%", marginLeft: "1%", marginRight: "50%", marginTop: "1%" }}>
                <div className="card-header">
                    {props.name}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{ props.cardTitle}</h5>
                    <p className="card-text">{ props.cardText}</p>
                    <footer className="blockquote-footer">{ props.cardDate}</footer>
                </div>
            </div>
        </>
    )

}

export default ClientResponse;