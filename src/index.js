import React from 'react';
import ReactDOM from 'react-dom/client';
import Greetings from './components/greetings';
import Lists from './components/lists';
import Counter from './components/counter'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <h1> this is from index page </h1>
   <Greetings  name="abcd" />
   <Greetings  name="efgh" />
   <Lists/>
   
   <Counter  initialValue={10}> 
   <h1>this is children in custom component counter</h1>
   </Counter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
