import React from "react";

const ContactInfo = (props) => {
    return (
        <div className="contactInfo--leftColumn">
            <div className="contactInfo--card">
                <div className="contactInfo--dislpay">
                    <img src={props.image} alt="Mbhoni"/>
                    <div className="text-block contactInfo--name">
                        <h2>{props.name}</h2>
                    </div>
                </div>
                <div className="contactInfo--container">
                    <div className="contactInfo--about">
                        <p><i className="fa fa-briefcase fa-fw"></i>{props.title}</p>
                        <p><i className="fa fa-home fa-fw"></i>{props.location}</p>
                        <p className="email"><i className="fa fa-envelope fa-fw"></i>{props.email}</p>
                        <p><i className="fa fa-phone fa-fw"></i>{props.phone}</p>
                        <hr />
                    </div>
                    
                    <div className="contactInfo--skillSet">
                        <h2 className="contactInfo--skills"><i className="fa fa-asterisk"></i>Skills</h2>
                        <p>Figma</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills figma">60%</div>
                        </div>
                        <p>Javascript</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills js">50%</div>
                        </div>
                    </div>
                
                    <div className="contactInfo--language">
                        <h2><i className="fa fa-globe"></i>Language</h2>
                        <p>English</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills english">70%</div>
                        </div>
                        <p>Xitsonga</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills xitsonga">80%</div>
                        </div>
                        <p>Afrikaans</p>
                        <div className="contactInfo--progress-bar">
                            <div className="skills afrikaans">40%</div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default ContactInfo