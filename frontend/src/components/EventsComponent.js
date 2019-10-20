import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import { CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import EventsList from './EventsList';

/**
 * Handles rendering all of the events.
 * At the moment it's rendering event info for the dummy data.
 * The idea here is that on the componentWillMount method we
 * make a call to the erver endpoint and set the state events slice
 * to be what the server response is.
 */
class EventsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            events: []
        }
    }

    componentWillMount = () => {
        this.setState({events: [
            {
                'name': 'HackFSU',
                'date': 'Oct 18th - 20th',
                'city': 'Tallahassee',
                'state': 'FL',
                'image': 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/281/thumb/Untitled_design_%281%29.png?1568649753'
            },
            {
                'name': 'HackGT',
                'date': 'Oct 25th - 27th',
                'city': 'Atlanta',
                'state': 'GA',
                'image': 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/226/thumb/MLH_800x800.png?1565013546'
            },
            {   
                'name':"HackRU", 
                'date':"Oct 19th - 20th", 
                'city':"New Brunswick", 
                'state':"NJ", 
                'image':"https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/275/thumb/HackRU-logo_smol.jpg?1567708609"
            },
            {   
                'name':"health++", 
                'date':"Oct 19th - 20th", 
                'city':"Stanford", 
                'state':"CA", 
                'image':"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/271/thumb/stanfordHospital.jpg?1567624812"
            },
            {   
                'name':"MadHacks", 
                'date':"Oct 19th - 20th", 
                'city':"Madison", 
                'state':"WI", 
                'image':"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/260/thumb/mad1.png?1565904760"
            },
            {   
                'name':"TAMU Datathon", 
                'date':"Oct 19th - 20th", 
                'city':"College Station", 
                'state':"TX", 
                'image':"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/216/thumb/SpaceBack_vertical_notext.png?1563906329"
            },
            {   
                'name':"Cal Hacks", 
                'date':"Oct 25th - 27th", 
                'city':"Berkeley", 
                'state':"CA", 
                'image':"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/290/thumb/Artboard_9_4x.png?1569440386"
            }

        ]})
    }

    viewCarpools() {
        console.log("Checking carpools");
    }

    render() {
        // const useStyles = makeStyles({
        //     card: {
        //       maxWidth: 345,
        //     },
        //     media: {
        //       height: 140,
        //     },
        // });

        // const classes = useStyles();

        return (
            <div>
                {/* {this.state.events.map((event, index) => {
                    return (
                        <Card style={{maxWidth: '350px', margin: '10px'}}>
                            <CardActionArea>
                                <CardMedia
                                    image={event.image}
                                    title={event.name}
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography>{'EventName: ' + event.name}</Typography>
                                <Typography>{'Date: ' + event.date}</Typography>
                                <Typography>{'Location: ' + event.city + ", " + event.state}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to="/Carpools" size="small" color="primary">
                                    Check Carpools
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })} */}
                <EventsList/>
            </div>
        )
    }
}

export default EventsComponent;