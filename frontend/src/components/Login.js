import React from 'react';
import '../App.css';
import { Link, Redirect } from "react-router-dom";
import { tsModuleBlock } from '@babel/types';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            typeOfUser: "",
            users: [],
            redirect: false
        }
    }

    enterEmail = (e) => {
        this.setState({email: e.target.value})
    }

    enterPassword = (e) => {
        this.setState({password: e.target.value})
    }

    selectUser = (e) => {
        this.setState({typeOfUser: e.target.value})
    }

    // test = () => {
    //     console.log(this.state.email);
    //     console.log(this.state.password);
    //     console.log(this.state.typeOfUser);
    //     let userInstance = {
    //         email: this.state.email,
    //         password: this.state.password,
    //         typeOfUser: this.state.typeOfUser
    //     }
    //     this.setState({users: [...this.state.users, userInstance ]});
    //     this.state.users.push(userInstance);
    //     console.log("Object 2: " + this.state.users[0].email);
    // }
    
    clickSubmit = () => {
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.typeOfUser);
        let userInstance = {
            email: this.state.email,
            password: this.state.password,
            typeOfUser: this.state.typeOfUser
        }
        this.setState({users: [...this.state.users, userInstance ]});
        this.state.users.push(userInstance);
        this.state.users.map((tmp) => {
            if(!(tmp.email == userInstance.email && tmp.password == userInstance.password && tmp.typeOfUser == userInstance.typeOfUser)){
                this.setState({redirect: true});
            }
        })
        console.log("Object: " + userInstance.email);
        console.log("Object 2: " + this.state.users[0].email);
    }


    render(){
        if(this.state.redirect == true){
            return <Redirect to="/" />
        }
        return(
            <div>
                <div className="login">
                    <h3>Login</h3>
                    <input type="text" placeholder="Username" value={this.state.email} onChange={this.enterEmail}></input>
                    <input type="text" placeholder="Password" value={this.state.password} onChange={this.enterPassword}></input>
                    <select aria-label="Type of User" id="type" value={this.state.typeOfUser} onClick={this.selectUser}>
                        <option>Attendee</option>
                        <option>Organizer</option>
                    </select>
                    {/* <button onClick={this.test}>
                        Test
                    </button> */}
                    <Link to="/Landing">
                        <button type="submit" component={Link} to="/Landing" onClick={this.clickSubmit}>Submit</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Login;