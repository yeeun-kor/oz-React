import { useRef, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>useRef실습</h1>
      <h3>Controlled Component</h3>
      <h5>
        리랜더링이 바로바로 되는 , 입력요소의 컴포넌트 Controlled Component
        <ControlledInput></ControlledInput>
      </h5>
      <hr />
      <h3>useRef</h3>
      <h5>
        리랜더링이 즉각적으로 반영되지 않고, 최종값만 반영이 되는, 직접 돔을
        조작함.<UseRefInput></UseRefInput>
      </h5>
      <hr />
      <h3>useRef로 매번 리랜더링시 변수초기화 막을 수 있다.</h3>
      <Counter></Counter>
    </>
  );
}

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </div>
  );
};
const UseRefInput = () => {
  const inputRef = useRef(null);
  //DOM에서 value값 꺼내는 함수 생성
  const getInputRefVal = () => {
    console.log(inputRef.current.value);
  };

  //ref참조객체를활용하여 input창에 focus 기능넣기
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={getInputRefVal}>useRef로 최종값 갖고오기!</button>
      <button onClick={focusInput}>포커스온!</button>
    </div>
  );
};
const Counter = () => {
  const [count, setCount] = useState(0);
  const refNum = useRef(null);
  return (
    <div>
      <h4>countNumber : {count}</h4>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          console.log(`PLUS : ${count}`);
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev + -1);
          console.log(`MINUS : ${count}`);
        }}
      >
        Minus
      </button>
      <button
        onClick={() => {
          refNum.current = count;
        }}
      >
        useRef값저장
      </button>
      <button
        onClick={() => {
          console.log(`useRef로 저장한 값 : ${refNum.current}`);
        }}
      >
        SHOWuseRef
      </button>
    </div>
  );
};
export default App;
