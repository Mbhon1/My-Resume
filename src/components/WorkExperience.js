import React from "react";

const WorkExperience = (props) => {
    return (
        <div className="workExperience--card">
            <div className="workExperience--container">
                <h2><i className="fa fa-suitcase"></i>{props.title}</h2>
                <div className="workExperience--list">
                    <h4>{props.jobTitle1} / {props.company1}</h4>
                    <h5><i className="fa fa-calendar"></i>{props.duration1}</h5>
                    <p>{props.description1}</p>
                    <hr />
                </div>
                
                <div className="workExperience--list">
                    <h4>{props.jobTitle2} / {props.company2}</h4>
                    <h5><i className="fa fa-calendar"></i>{props.duration2}</h5>
                    <p>{props.description2}</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default WorkExperience