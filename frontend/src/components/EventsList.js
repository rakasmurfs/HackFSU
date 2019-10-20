import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './cssSheets/userformstyle.css'


const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

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
    const classes = useStyles();

    var events = [
        {name:"HackRU", date:"Oct 19th - 20th", city:"New Brunswick", state:"NJ", image:"https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/275/thumb/HackRU-logo_smol.jpg?1567708609"},
        {name:"health++", date:"Oct 19th - 20th",city:"Stanford", state:"CA", image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/271/thumb/stanfordHospital.jpg?1567624812"},
        {name:"MadHacks", date:"Oct 19th - 20th", city:"Madison", state:"WI", image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/260/thumb/mad1.png?1565904760"},
        {name:"TAMU Datathon", date:"Oct 19th - 20th", city:"College Station", state:"TX",image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/216/thumb/SpaceBack_vertical_notext.png?1563906329"},
        {name:"Cal Hacks", date:"Oct 25th - 27th", city:"Berkeley", state:"CA",image:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/290/thumb/Artboard_9_4x.png?1569440386"},
        {name: 'HackGT', date: 'Oct 25th - 27th', city: 'Atlanta', state: 'GA', image: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/226/thumb/MLH_800x800.png?1565013546'}
    ];

    // return(
    //     <div>
    //         {events.map((temp) => {
    //             <Card className={classes.card}>
    //                 <CardActionArea>
    //                 <CardMedia
    //                     className={classes.media}
    //                     image={temp.image}
    //                     title={temp.name}
    //                 />
    //                 <CardContent>
    //                     <Typography gutterBottom variant="h5" component="h2">
    //                         {temp.name}
    //                     </Typography>
    //                     <Typography variant="body2" color="textSecondary" component="p">
    //                         {temp.date}
    //                     </Typography>
    //                     <Typography>
    //                         {temp.city} {temp.state}
    //                     </Typography>
    //                 </CardContent>
    //                 </CardActionArea>
    //                 <CardActions>
    //                 <Button size="small" color="primary">
    //                     Share
    //                 </Button>
    //                 <Button size="small" color="primary">
    //                     Learn More
    //                 </Button>
    //                 </CardActions>
    //             </Card>
    //         })}
            
    //     </div>
    // );
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


