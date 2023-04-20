import React from 'react';
// external stylesheet link
// import './stylesheets/greetings.css'

// component by using function 

//  const name= 'john';

 // inline styles done using the object making
const styleObj = {
    color: 'red',
    backgroundColor: 'yellow'
};
function Greetings(props){
    // console.log(props);
    const clickHandler=()=>{
        alert(' onclick event triggerd in custom component Greeting');
    }

    return(
        <React.Fragment>
        <h3 style={styleObj}  onClick={clickHandler} > hello {props.name} this is from component greeting</h3>
        <h3 style={styleObj}  onClick={clickHandler} > bye {props.name},  this is from component greeting</h3>
        </React.Fragment>
    )
}




// component using class 

// class Greetings extends React.Component {
//    // class cant  make  use of return keyword so uses render to do  so
//    render(){
//          return(
//             <React.Fragment>
//             <h3 style={styleObj}> hello {name} this is from component greeting</h3>
//             <h3 style={styleObj}> bye {name},  this is from component greeting</h3>
//             </React.Fragment>
//          )
// }
// }

export default  Greetings;