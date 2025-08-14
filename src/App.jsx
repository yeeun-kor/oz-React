import { useState } from "react";
import "./App.css";

function App() {
  const { count, increase, decrease } = useCounter(10);
  return (
    <>
      <h1>CustomHook</h1>
      <div>
        <h4>countNumber : {count}</h4>
        <button onClick={increase}>Plus</button>
        <button onClick={decrease}>Minus</button>
      </div>
    </>
  );
}

//커스텀훅
const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  //+- 함수
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  //커스텀훅 반환값은 객체로 반환
  return {
    count,
    increase,
    decrease,
  };
};

export default App;
