import React, {useState} from 'react';
import Info from './8step/info'
const App = () => {
  const [visible,setVisible] = useState(true);
  const click = () => {
    setVisible(prevState => (!prevState));
  }
  return (
    <>
      <button onClick={click}>{visible?`숨기기`:`보이기`}</button>
      <p>{visible?<Info/>:''}</p>
    </>
  )
}

export default App;
