import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

//Unmount 하기 위해 토글 상태 추가
function App() {
  const [showCounter, setShowCounter] = useState(false);
  //상태가  true일때만, 컴포넌트 랜더링 하겠다.
  useEffect(() => {
    console.log("생성 및 업데이트");
    return () => {
      console.log("리턴함수> 함수가 죽을 때 호출 된다.");
    };
  }, [showCounter]);
  return (
    <>
      {showCounter && <Counters></Counters>}
      <button onClick={() => setShowCounter((prev) => !prev)}>SHOW?</button>
    </>
  );
}

//함수 컴포넌트 생명주기 ㅣ리액트훅
function Counters() {
  //상태
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(100);

  //useEffect()- 언마운트
  useEffect(() => {
    console.log("생성 및 업데이트");
    return () => {
      console.log("리턴함수> 함수가 죽을 때 호출 된다.");
    };
  }, []);

  //초기화면만 랜더링
  useEffect(() => {
    console.log("only first rendering");
  }, []);

  //컴포넌트가 리랜더링 되는 모든 경우의 수
  useEffect(() => {
    console.log("re-rendering");
  });

  //특정값 변할 때
  useEffect(() => {
    console.log("특정값(counter)이 변했다!");
  }, [counter]);
  return (
    <>
      <div>counter : {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <div>counter : {counter2}</div>
      <button onClick={() => setCounter2((prev) => prev - 1)}>-</button>
    </>
  );
}

export default App;
