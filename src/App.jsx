import { useState } from "react";
import "./App.css";

function App() {
  //버튼 클릭시 기분이 바뀔 수 있도록
  const [mood, setMood] = useState("Normal");
  return (
    <>
      <Face mood={mood}></Face> {/* 조건문에 현재 기분 상태 전달 */}
      <div
        className={
          mood === "Happy" ? "happy" : mood === "Normal" ? "normal" : "sad"
        }
      >
        오늘 기분 : {mood}
      </div>
      <button onClick={() => setMood("Happy")}>Happy</button>
      <button onClick={() => setMood("Normal")}>Normal</button>
      <button onClick={() => setMood("Sad")}>Sad</button>
      <Face2 mood={mood}></Face2>
      <Face3 mood={mood}></Face3>
    </>
  );
}

//face컴포넌트 ( 조건에 따라 표정이 달라짐 )
//1. if문에 따라 JSX문법 바꾸기.
function Face({ mood }) {
  if (mood === "Happy") {
    return <div>😉</div>;
  } else if (mood === "Sad") {
    return "😭";
  } else {
    return "😐";
  }
}

//2. 삼항연산자 💪🏻 가장 많이 사용
//조건문과 달리 return 문 1개 안에서 설정하기
function Face2({ mood }) {
  return (
    <>
      {mood === "Happy" ? (
        <div>😉</div>
      ) : mood === "Normal" ? (
        <div>😐</div>
      ) : (
        <div>😭</div>
      )}
    </>
  );
}

//3. 논리연산자 💪🏻 두번째로 많이 사용
function Face3({ mood }) {
  return (
    <>
      {mood === "Happy" && <div>😉</div>}
      {mood === "Normal" && <div>😐</div>}
      {mood === "Sad" && <div>😭</div>}
    </>
  );
}
export default App;
