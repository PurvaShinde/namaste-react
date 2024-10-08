import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, 
[React.createElement('div', { id: 'child' }, 
[React.createElement('h1', { id: 'h1' }, 'I am h1'),
React.createElement('p', { id: 'p' }, 'I am h1 inside the para')]
),
React.createElement('div', { id: 'child2' }, 
[React.createElement('h1', { id: 'h1' }, 'I am h1'),
React.createElement('p', { id: 'p' }, 'I am h1 inside the para')]
)])
// const heading = React.createElement('h1', { id: 'heading' }, 'Hello React from diff JS!!')
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)