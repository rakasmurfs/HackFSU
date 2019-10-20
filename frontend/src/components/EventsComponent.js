import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { CardContent, Typography, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

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
                'date': '2019-01-01',
                'city': 'Tally',
                'state': 'FL'
            },
            {
                'name': 'NY HackFest',
                'date': '2020-02-02',
                'city': 'Albany',
                'state': 'NY'
            },
            {
                'name': 'LA Code',
                'date': '2021-03-03',
                'city': 'Los Angeles',
                'state': 'CA'
            }
        ]})
    }

    viewCarpools() {
        console.log("Checking carpools");
    }

    render() {
        return (
            <div>
                {this.state.events.map((event, index) => {
                    return (
                        <Card>
                        <CardContent>
                            <Typography>{'EventName: ' + event.name}</Typography>
                            <Typography>{'Date: ' + event.date}</Typography>
                            <Typography>{'Location: ' + event.city + ' ' + event.state}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button component={Link} to="/Carpools" size="small" color="primary">
                                Check Carpools
                            </Button>
                        </CardActions>
                    </Card>
                    )
                })}
            </div>
        )
    }
}

export default EventsComponent;