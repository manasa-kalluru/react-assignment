import React from 'react';


const userInput = (props) => {
    return <input type="text" onChange={props.typed} value={props.prevName}/>;
};

export default userInput;
