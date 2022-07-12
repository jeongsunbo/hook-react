import './App.css';
import { useState, useEffect, useCallback } from 'react';

function App() {
  const [ number, setNumber ] = useState(0); 
  const [ name, setName ] = useState("");
  // useCallback으로 감싸면 한번만 호출됨 
  const myFunction = useCallback(() => {
    console.log(`myFunction: number ${number}`);
    return;
  },[number]) //연관성 배열에 숫자를 두면 계속 호출됨
  
  useEffect(()=>{ //인풋의 값이 변경될때만 콘솔에 출력됨
    console.log("myFunction이 변경되었습니다.");
  },[myFunction]);
  return (
    <div className="App">
      <input type="number" 
      value={number}
      onChange={(e)=> setNumber(e.target.value)}
      />
      <br/>
      <button onClick={myFunction}>함수호출</button>
      <br/>
      <input type="text"
      value={name} 
      onChange={(e)=> setName(e.target.value)}
      />
    </div>
  );
}

export default App;
