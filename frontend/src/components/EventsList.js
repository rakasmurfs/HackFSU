import React from 'react';
import './cssSheets/userformstyle.css'

// function EventsList() {
//     var state = ["Car1", "Car2", "Car3", "Car4"];
//     return <div className="form-style-10">
//         <div className="contentCard">
//             <a href="/Carpools">
//                 <div className="imageWrapper"><img src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/276/thumb/backgroundPicture.jpg?1568051912"></img></div>
//                 <div className="textWrapper">
//                     <span>Event Dates</span>
//                     <span>Event City, Event State</span>
//                 </div>
//             </a>
//         </div>
//     </div>
// }

function EventsList() {
    var events = [
        {name:"HackRU", date:"Oct 19th - 20th", city:"New Brunswick", state:"NJ", image:"https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/275/thumb/HackRU-logo_smol.jpg?1567708609"},
        {name:"health++", date:"Oct 19th - 20th",city:"Stanford", state:"CA", image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/271/thumb/stanfordHospital.jpg?1567624812"},
        {name:"MadHacks", date:"Oct 19th - 20th", city:"Madison", state:"WI", image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/260/thumb/mad1.png?1565904760"},
        {name:"TAMU Datathon", date:"Oct 19th - 20th", city:"College Station", state:"TX",image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/216/thumb/SpaceBack_vertical_notext.png?1563906329"},
        {name:"Cal Hacks", date:"Oct 25th - 27th", city:"Berkeley", state:"CA",image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/290/thumb/Artboard_9_4x.png?1569440386"}
    ];
    return <div className="form-style-10">
            {events.map((temp) => {
                return  <div className="contentCard">
                <a href="/Carpools">
                    <div className="imageWrapper"><img src={temp.image}></img></div>
                    <div className="textWrapper">
                        <span>{temp.name}</span><br></br>
                        <span>{temp.date}</span><br></br>
                        <span>{temp.city}, {temp.state}</span>
                    </div>
                </a>
            </div>
            })}
</div>
    
}
export default EventsList;


