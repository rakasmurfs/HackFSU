import React from 'react';
import './cssSheets/userformstyle.css'

function DisplayAvailable() {
    var state = ["Car1", "Car2", "Car3", "Car4"];
    var countryData = [
        { value: 'USA', name: 'USA' },
        { value: 'CANADA', name: 'CANADA' }
    ];
    return <div className="form-style-9">
        <select name="country" >
            {countryData.map((e, key) => {
                return <option key={key} value={e.value}>{e.name}</option>;
            })}
        </select>
        <ul>
            {state.map((temp) => {
                return <li>{temp}</li>
            })}
        </ul>
    </div>
}

export default DisplayAvailable;
