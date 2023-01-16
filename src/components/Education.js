import React from "react";

const Education = (props) => {
    return (
        <div className="education--card">
            <div className="education--contaier">
                <div className="education--list">
                    <h2><i className="fa fa-certificate"></i>{props.title}</h2>
                    <h4>{props.school}</h4>
                    <h5><i className="fa fa-calendar"></i>{props.date}</h5>
                    <p>(<span>{props.certificate}</span>){props.course}</p>
                    <hr />
                </div>
                <div className="education--list">
                    <h4>{props.hsTitle}</h4>
                    <h5><i className="fa fa-calendar"></i>{props.hsDate}</h5>
                    <p>(<span>{props.hsCertificate}</span>)</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Education