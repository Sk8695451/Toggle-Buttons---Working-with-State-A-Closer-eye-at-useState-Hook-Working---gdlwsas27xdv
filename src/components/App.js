import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
  const [data1, setData1] = useState('OFF')
  const [data2, setData2] = useState('ON')
//code here 
  const handleClick = ()=>{
  if (event.target.id == 'btn1'){
  setData1('ON');
    setData2('OFF');
    
  }
    else{
    setData1('OFF');
    setData2('ON');
    }
  }
  

  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {data1}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {data2}
      </button>
    </div>
  );
}


export default App;