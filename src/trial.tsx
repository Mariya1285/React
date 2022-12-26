import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

export const Test = ()=> {
   return (
    <h1>Test Component</h1>
   )
}

// react 17 WAY:
// ReactDOM.render(
//     <h1>Hello World</h1>,
//   document.getElementById('root')
// );