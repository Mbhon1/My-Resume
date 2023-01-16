import React from "react";

function Footer({twitter, instagram, github}){
    return (
        <div className="footer--container">
            <footer className="footer--icons">
                <a href={twitter}><i className="fa fa-twitter"></i></a>
                <a href={instagram}><i class="fa fa-instagram"></i></a>
                <a href={github}><i class="fa fa-github"></i></a>
            </footer>
        </div>
    )
}

export default Footer