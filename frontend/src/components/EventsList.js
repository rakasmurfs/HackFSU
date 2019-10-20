import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './cssSheets/userformstyle.css'


const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

function EventsList() {
    const classes = useStyles();

    var events = [
        {name:"HackRU", date:"Oct 19th - 20th", city:"New Brunswick", state:"NJ", image:"https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/275/thumb/HackRU-logo_smol.jpg?1567708609"},
        {name:"health++", date:"Oct 19th - 20th",city:"Stanford", state:"CA", image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/271/thumb/stanfordHospital.jpg?1567624812"},
        {name:"MadHacks", date:"Oct 19th - 20th", city:"Madison", state:"WI", image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/260/thumb/mad1.png?1565904760"},
        {name:"TAMU Datathon", date:"Oct 19th - 20th", city:"College Station", state:"TX",image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/216/thumb/SpaceBack_vertical_notext.png?1563906329"},
        {name:"Cal Hacks", date:"Oct 25th - 27th", city:"Berkeley", state:"CA",image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/290/thumb/Artboard_9_4x.png?1569440386"},
        {name: 'HackGT', date: 'Oct 25th - 27th', city: 'Atlanta', state: 'GA', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/226/thumb/MLH_800x800.png?1565013546'},
        {name:'DandyHacks', date: 'Oct 25th - 27th', city:'Rochester', state: 'NY', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/276/thumb/backgroundPicture.jpg?1568051912'},
        {name:'MXHACKS VI', date: 'Oct 25th - 27th', city:'La Jolla', state: 'CA', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/264/thumb/fondo.jpg?1566398497'},
        {name:'TechTogether New York', date: 'Oct 25th - 27th', city:'Queens', state: 'NY', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/306/thumb/Untitled_design_%285%29.png?1570027449'},
        {name:'YHack', date: 'Oct 25th - 27th', city:'New Haven', state: 'CT', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/265/thumb/newhaven.jpeg?1566414043'},
        {name:'HackGSU', date: 'Nov 1st - 3rd', city:'Atlanta', state: 'GA', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/305/thumb/aldr.png?1569609906'},
        {name:'SquirrelHacks', date: 'Nov 1st - 3rd', city:'Ames', state: 'IA', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/304/thumb/MLH_Backdrop.png?1569596578'},
        {name:'VandyHacks', date: 'Nov 1st - 3rd', city:'Nashville', state: 'TN', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/342/thumb/pattern.png?1570630761'},
        {name:'Code for Good', date: 'Nov 2nd - 3rd', city:'Durham', state: 'NC', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/283/thumb/duke-image.png?1568747490'},
        {name:'HackPSU', date: 'Nov 2nd - 3rd', city:'University Park', state: 'PA', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/344/thumb/HackPSUBackground.jpeg?1570631627'},
        {name:'HackRPI', date: 'Nov 2nd - 3rd', city:'Troy', state: 'NY', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/282/thumb/rpi-lawn.png?1568661649'},
        {name:'HackTX', date: 'Nov 2nd - 3rd', city:'Austin', state: 'TX', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/348/thumb/MLH_Cover.png?1570808216'},
        {name:'HealthHacks 2019', date: 'Nov 2nd - 3rd', city:'Richmond', state: 'VA', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/340/thumb/hh1.png?1570221136'},
        {name:'UB Hacking', date: 'Nov 2nd - 3rd', city:'Buffalo', state: 'NY', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/341/thumb/MLH_%281%29.png?1570457840'},
        {name:'WHACK', date: 'Nov 2nd - 3rd', city:'Wellesley Hills', state: 'MA', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/301/thumb/BackGround_%281%29.png?1569520714'},
        {name:'Hack KState', date: 'Nov 8th - 10th', city:'Manhattan', state: 'KS', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/291/thumb/background_%282%29.jpg?1569440623'},
        {name:'HackPrinceton Fall 2019', date: 'Nov 8th - 10th', city:'Princeton', state: 'NJ', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/288/thumb/illustration.png?1569002138'},
        {name:'TigerHacks', date: 'Nov 8th - 10th', city:'Columbia', state: 'MO', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/346/thumb/3580707652_2dce73bc27_z.jpg?1570638352'},
        {name:'HackNJIT', date: 'Nov 9th - 10th', city:'Richardson', state: 'TX', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/279/thumb/pizzanjit.png?1568300598'},
        {name:'HackUTD VI', date: 'Nov 9th - 10th', city:'College Park', state: 'MD', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/204/thumb/mlh-hackutd-VI-splash-bgcolorfix.png?1557516095'},
        {name:'Technica', date: 'Nov 9th - 10th', city:'College Park', state: 'MD', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/270/thumb/technica_image_for_mlh_event_page.png?1568642324'},
        {name:'TeenHacks LI', date: 'Nov 9th - 10th', city:'Old Westbury', state: 'NY', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/307/thumb/IMG_7632_copy.jpg?1570029048'},
        {name:'Lehman Hackathon', date: 'Nov 15th - 16th', city:'Bronx', state: 'NY', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/284/thumb/lehman-bg.png?1568812518'},
        {name:'BostonHacks', date: 'Nov 16th - 17th', city:'Boston', state: 'MA', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/205/thumb/BostonHacks_EventBackground_%282%29.jpg?1557516306'},
        {name:'Hack Western', date: 'Nov 22nd - 24th', city:'London', state: 'ON', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/289/thumb/MLH_Square_Background.png?1569357504'},
        {name:'Hack Arizona', date: 'Jan 17th - 19th', city:'Tucson', state: 'AZ', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/207/thumb/Canyon_Background.png?1557516727'},
        {name:'Brickhack', date: 'Feb 8th - 9th', city:'Rochester', state: 'NY', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/208/thumb/MLH_Background_%281%29.png?1557522014'},
        {name:'Hack@CEWIT', date: 'Feb 14th - 16th', city:'Stony Brook', state: 'NY', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/273/thumb/Untitled_design_%282%29.png?1567625878'},
        {name:'PickHacks', date: 'Apr 3rd - 5th', city:'Rolla', state: 'MO', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/198/thumb/Havener_Center_2_%281%29.png?1557420669'},
    ];

    return (<div className="form-style-10">
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
    );
}
export default EventsList;


