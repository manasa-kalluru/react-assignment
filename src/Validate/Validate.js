import React from  'react';


const validate = (props) => {
    let validationMessage = <p>Text long enough</p>;
    if(props.inputLength<=5){
        validationMessage = <p>Text too short</p>;
    }
         return (
             <div>
                 {validationMessage}
             </div>
         )
}

export default validate;
