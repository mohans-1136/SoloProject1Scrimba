import React from 'react'

export default function Info(){
    return(
        <section>
            <div className = "imagePlaceHolder">
            </div>
            <p className = "Name">
                Mohan S
            </p>
            <p className = "Position"> Outsystems Developer </p>
            <p className = "Site">
                laurasmith.website
            </p>
            <div className = "ButtonsWrapper">
                <button><i className="fa fa-cloud"></i>Email</button>
                <button className="linkedinbtn"><i className="fa fa-home"></i>LinkedIn</button>
            </div>
        </section>
    )
}