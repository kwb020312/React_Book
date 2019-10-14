import React from 'react';
import './App.css';
import Header from './MyComponent';
import Counter from './Counter';
import Say from './Say';
const App = () => {
  return (
    <>
      <Header name="김우빈" children="Hello React">Hello React</Header>
      <Counter />
      <Say/>
    </>
  )
}

export default App;
