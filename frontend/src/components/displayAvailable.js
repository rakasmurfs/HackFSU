import React from 'react';
import './cssSheets/userformstyle.css'

function DisplayAvailable() {
    var state = ["Car1", "Car2", "Car3", "Car4"];
    return <div className="form-style-9">
        <ul>
            {state.map((temp) => {
                return <li><span className="align-left">{temp}</span> <a className="align-right" href="">Join Car</a></li>
            })}
        </ul>
    </div>
}

export default DisplayAvailable;
