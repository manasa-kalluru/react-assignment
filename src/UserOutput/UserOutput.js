import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>React assignment</p>
            <p>works!!</p>
            <h1>{props.name}</h1>
        </div>
    );
};

export default userOutput;
