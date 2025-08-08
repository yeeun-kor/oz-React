import { useState } from "react";
import "./App.css";
/* 카운터 앱 만들기
- 버튼 클릭 이벤트에 따라 counter 상태 값이 변경되도록 구현
- 각각의 버튼에 해당하는 동작을 별도의 함수로 처리
*/
function App() {
  // React의 useState 훅을 사용하여 counter,input 상태 및 상태 변경 함수 선언
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  // 버튼 컴포넌트에 전달할 클릭 이벤트 핸들러 함수 정의
  const plusCounter = () => {
    setCounter(counter + 1);
  };
  const minusCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      {/* 입력 컴포넌트에, input,setInput전달
    setCount도 함께 전달해서 count값 바뀌도록 포함시켰음 */}
      <CounterInput
        input={inputValue}
        set={setInputValue}
        setCount={setCounter}
      ></CounterInput>
      <Counter counter={counter}></Counter>
      <PlusBtn plusCounter={plusCounter}></PlusBtn>
      <MinusBtn minusCounter={minusCounter}></MinusBtn>
    </>
  );
}

// Counter 컴포넌트: 부모로부터 counter 값을 props로 전달받아 화면에 표시
function Counter({ counter }) {
  return <div>counter : {counter} </div>;
}

// PlusBtn, MinusBtn 컴포넌트: 부모로부터 클릭 이벤트 핸들러 함수를 props로 전달받아 버튼에 연결
function PlusBtn({ plusCounter }) {
  return <button onClick={plusCounter}>+</button>;
}
function MinusBtn({ minusCounter }) {
  return <button onClick={minusCounter}>-</button>;
}

//CounterInput 컴포넌트 : 사용자에게 입력받은 숫자데이터를 counter 변수로 초기화
function CounterInput({ input, set, setCount }) {
  return (
    <>
      <input
        type="number"
        //input 상태의 값을 input 요소의 value로 설정하여 화면에 표시
        value={input}
        //사용자가 입력한 값으로 input 상태를 업데이트하여, 입력창과 상태 동기화
        onChange={(e) => {
          set(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          //버튼 클릭시 input상태 값을 부모 컴포넌트의 counter상태와 동기화 시키기.
          setCount(input);
        }}
      >
        입력
      </button>
    </>
  );
}
export default App;
