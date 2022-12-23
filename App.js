import React,{usestate} from 'react';

function App() {
  const [number1,setNumber1]=usestate(0);
  const [number2,setNumber2]=usestate(0);
  const[total,seTotal]=usestate(number1+number2);

  function addThem(){
    seTotal(number1+number2);
  }
  return (
    <div className="App">
      
      <h1>Basic Addition Form </h1>
     


         <div class="input">
            <input type='number' placeholder='0' value={number1} onChange={e=>setNumber1(+e.target.value)}/>
            <input type='number' placeholder='0' value={number2}  onChange={e=>setNumber2(+e.target.value)}/>
        </div>


     <button onClick={addThem}>Add Them!</button>


     <h2>{total}</h2>
   
    </div>
  );
}

export default App;
