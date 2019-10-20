import React from 'react';
import './cssSheets/userformstyle.css'

class UserForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            emergencyName:"",
            emergencyPhone:"",
            address:""
        }
    }

    changeFirstName = (e) => {
        this.setState({firstName:e.target.value})
    }
    changeLastName = (e) => {
        this.setState({lastName: e.target.value})
    }
    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    changePhone = (e) => {
        this.setState({phone: e.target.value})
    }
    changeEmergencyPhone = (e) => {
        this.setState({emergencyPhone: e.target.value})
    }
    changeEmergencyName = (e) => {
        this.setState({emergencyName: e.target.value})
    }
    changeAddress = (e) => {
        this.setState({address: e.target.value})
    }
    submit = (e) => {
        e.preventDefault();
        
        console.log(this.state);
    }
    
    render() {
        return (
            <form className="form-style-9" method="POST">
                <ul>
                    <li>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.changeFirstName} className="field-style field-split align-left" placeholder="First Name" />
                        <input type="email" name="lastName" value={this.state.lastName} onChange={this.changeLastName} className="field-style field-split align-right" placeholder="Last Name" />
                    </li>
                    <li>
                        <input type="text" name="email" value={this.state.email} onChange={this.changeEmail} className="field-style field-split align-left" placeholder="Email Address" />
                        <input type="url" name="phone" value={this.state.phone} onChange={this.changePhone} className="field-style field-split align-right" placeholder="Phone Number" />
                    </li>
                    <li>
                        <input type="text" name="emergencyPhone" value={this.state.emergencyPhone} onChange={this.changeEmergencyPhone}     className="field-style field-split align-left" placeholder="Emergency Contact Phone Number" />
                        <input type="url" name="emergencyName" value={this.state.emergencyName} onChange={this.changeEmergencyName}  className="field-style field-split align-right" placeholder="Emergency Contact Name" />
                    </li>
                    <li>
                        <input type="text" name="address" value={this.state.address} onChange={this.changeAddress} className="field-style field-full align-none" placeholder="Home Address" />
                    </li>
                    <li>
                        <input type="submit" value="Submit" onClick={this.submit} />
                    </li>
                </ul>
            </form>
        )
    }

}

export default UserForm;