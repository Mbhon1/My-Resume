import React from "react";

export default function KeySummary({title, description}) {
    return (
        <div className="keySummary--card">
            <div className="keySummary--container">
                <h2><i className="fa fa-certificate"></i>{title}</h2>
            </div>
            <div className="keySummary--desc">
                <p>{description}</p>
            </div>
        </div>
    )
}