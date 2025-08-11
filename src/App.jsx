import { useState } from "react";
import "./App.css";

function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  console.log("랜더링됨");

  //상태관리 이벤트 핸들러
  const handler = () => {
    const newArr = arr.slice();
    newArr.push(90);
    setArr(newArr);
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
