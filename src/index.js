// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import { getRoles } from "@testing-library/react";
import React, { Fragment } from "react";
import ReactDOM from 'react-dom';

const elem1 = React.createElement('span' , { children: })

const element = React.createElement('div',
  {
    a: 5,
    b: 45,
    children: ['Hello World']

  });

console.log(element);

ReactDOM.render(element, document.querySelector('#root'));
