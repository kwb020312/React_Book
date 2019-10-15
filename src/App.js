import React from 'react';
import './App.css';
import Header from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import Event from './EventPractice';
import Validated from './ValidationSample';
import Scroll from './ScrollBox';
const App = () => {
  return (
    <>
      <p><Header name="김우빈" children="Hello React">Hello React</Header></p>
      <p><Counter /></p>
      <p><Say/></p>
      <p><Event/></p>
      <p><Validated/></p>
      <p><Scroll/></p>
    </>
  )
}

export default App;
