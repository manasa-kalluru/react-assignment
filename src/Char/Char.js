import React from 'react';
 const char = (props) => {
     const style  ={
         display: "inline-block",
         padding: '16px',
         textAlign : 'centre',
         margin: '16px',
         border: '1px solid black'
     };
     return (
         <div style={style} onClick={props.clicked}>
             {props.charac}
         </div>
     );
 };


 export default char;
