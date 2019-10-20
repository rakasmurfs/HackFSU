import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './cssSheets/userformstyle.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { CardContent, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import { Link } from "react-router-dom";

/**
 * Handles rendering available carpools.
 * At the moment, it displays all carpools for all events in the dummy data,
 * the idea is to pass into this component the selected event id, and in the
 * componentWillMount method we use that id to query just the carpools for
 * the given event id
 */
class DisplayAvailable extends React.Component {
    constructor() {
        super();
        this.state = {
            carpoolInfo: []
        }
    }

    componentWillMount() {
        // tis should be replaced with a call to the server endpoint
        // axios.get("http://localhost:3001/getData")
        // .then(response => this.setState({venuesInfo: response.data.info}))
        
        // this is dummy data
        this.setState({carpoolInfo: [
            {
                'vehicle': 'test vehicle 1',
                'driver' : 'test driver 1',
                'riders': [
                    {'name': 'rider 1'},
                    {'name': 'rider 2'}
                ]
            },
            {
                'vehicle': 'test vehicle 2',
                'driver' : 'test driver 2',
                'riders': [
                    {'name': 'rider 1'},
                    {'name': 'rider 2'},
                    {'name': 'rider 2'},
                    {'name': 'rider 2'}
                ]
            }
        ]})
    }

    render() {
        const classes = this.userStyles;

        return (
            <div>
                {this.state.carpoolInfo.map((carpoolInfo, index) => {
                    return (
                    <Card>
                        <CardContent>
                            <Typography>{'Vehicle: ' + carpoolInfo.vehicle}</Typography>
                            <Typography>{'Driver: ' + carpoolInfo.driver}</Typography>
                            <Typography>{'Riders: ' + carpoolInfo.riders.length}</Typography>
                        </CardContent>
                        <CardActions>
                            {/* need to pass in the carpool code to then use to update to update the mongodb entry */}
                            <Button component={Link} to="/Apply" 
                             disabled={carpoolInfo.riders.length >= 4}
                             size="small" 
                             color="primary">
                                {carpoolInfo.riders.length >= 4 ? 'Full' : 'Hop in!'}
                            </Button>
                        </CardActions>
                    </Card>
                    )
                })}
            </div>
        );
    }
}

export default DisplayAvailable;
