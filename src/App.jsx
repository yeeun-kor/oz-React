import { useState } from "react";
import "./App.css";

function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  console.log("랜더링됨");

  //상태관리 이벤트 핸들러
  const handler = () => {
    // setArr([6, 7, 8, 9, 10]); //계속 랜더링 된다.
    //기존 배열에 push하면 주소가 바뀌면서 랜더링이 될까?
    arr.push(6);
    setArr(arr); //주소가 바뀌지 않아서 랜더링이 안된다.
    console.log(arr);
  };
  return (
    <>
      <h1>상태관리</h1>
      array : {arr.join(", ")}
      <br />
      <button onClick={handler}>상태업데이트!</button>
    </>
  );
}
export default App;
