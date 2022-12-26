import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Test } from './trial';

const root = createRoot(document.getElementById('root')!!)
root.render(
    <>
        <h1>Hey..</h1>
        <Test></Test>
    </>

)

// react 17 WAY:
// ReactDOM.render(
//     <h1>Hello World</h1>,
//   document.getElementById('root')
// );