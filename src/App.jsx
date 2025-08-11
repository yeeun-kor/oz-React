import { useState } from "react";
import "./App.css";

function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  console.log("랜더링됨");

  //상태관리 이벤트 핸들러
  const handler = () => {
    setArr([...arr, 10, 11]);
    //...arr스프레드 문법을 사용하여 이전 주소값의 친구들을 그대로 불러모은다.
    console.log(arr); //1,2,3,4,5,10,11
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
