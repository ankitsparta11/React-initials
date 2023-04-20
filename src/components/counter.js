import React ,{useState} from 'react';


// using state by using class
// class Counter extends React.Component {
//     // making state object 
//     state ={
//         i:this.props.initialValue
//     };
   
//     // clickHandler function
//     clickHandler = ()=>{
//         // always use setState({..}) for making upadate in state
//         this.setState({
//             i: this.state.i+1
//         });
//     };
//    render(){
//     return(
//         <React.Fragment>
//         <div> pressed : {this.state.i} times</div>
//         <button onClick={this.clickHandler}>click me</button>
//         </React.Fragment> 
//     ) 
//    }
// }; 


const Counter=(props)=>{
     const [count, setCount] = useState(props.initialValue);
      const clickHandler =()=>{
        setCount(count+1);
      }
     return(
        <React.Fragment>
         { props.children}   
        <div> pressed : {count} times</div>
        <button onClick={clickHandler}>Clickme</button>

        </React.Fragment>
)


}

export  default Counter;