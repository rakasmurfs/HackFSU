import React from 'react';
import './cssSheets/userformstyle.css'



function OrgDashboard() {

    var carpools = [
        {
            name: "UserA",
            Carpool: "CarA",
            Riders: "UserB, UserC, UserD"
        },
        {
            name: "UserZ",
            Carpool: "CarZ",
            Riders: "UserX, UserC, UserV"
        },
        {
            name: "UserQ",
            Carpool: "CarQ",
            Riders: "UserW, UserE, UserR"
        },
    ];
    var attendees = [
        "Phyllys,Smetoun",
        "Clem,Tax",
        "Giselle,MacKee",
        "Burch,Lescop",
        "Sanford,Hobden",
        "Rianon,Woodfine",
        "Marcelia,Andrew",
        "Ches,Mollitt",
        "Silvanus,McCurtain",
        "Sallyanne,Thorne",
        "Conny,Bertome",
        "Joane,Lochet",
        "Cami,Huxton",
        "Gino,Facer",
        "Reina,Eldrett",
        "Chandal,Lillow",
        "Marje,O'Sharkey",
        "Becca,Seamen",
        "Catrina,Disbrey",
        "Kerby,Giovanazzi"
    ];

    return (<div className="form-style-10">
            <div className="adminCarpools">
                <span><b>Confirmed Carpools to Event</b></span>
                {carpools.map((temp) => {
                    return  (<div className="textWrapper">
                            <span>Driver: {temp.name}</span><br></br>
                            <span>Vehicle: {temp.Carpool}</span><br></br>
                            <span>Riders: {temp.Riders}, {temp.state}</span>
                            <span>__________________________________________</span>
                            </div>
                )})}
            </div>
            <div className="adminAttendees">
                <span><b>Confirmed Attendees</b></span>
            {attendees.map((temp) => {
                return(  
                    <div className="textWrapper">
                        <span>{temp}</span><br></br>
                    
            </div>
            )})}
            </div>
            </div>
    );
}
export default OrgDashboard;


