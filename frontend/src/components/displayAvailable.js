import React from 'react';
import './cssSheets/userformstyle.css'

function DisplayAvailable() {
    var state = ["Car1", "Car2", "Car3", "Car4"];
    return <div className="form-style-9">
        <ul>
            {state.map((temp) => {
                return <li>{temp}</li>
            })}
        </ul>
    </div>
}

export default DisplayAvailable;
