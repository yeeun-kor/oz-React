import { useState } from "react";
import "./App.css";

function App() {
  //json데이터 가지고 오기
  const [data, setData] = useState([]);

  //useState()로 fetch()시간차 관리 👨‍💼 첫 랜더링만 받와야 한다 (+빈배열)
  //만약 의존성 배열이 없다면? 모든 리랜더링 상황에서 호출이 될 것인디,
  //매번 json 파일 불러와야하니깐 랜더링 시간 오래걸림.
  useState(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <h1>데이터 목록 JSON 갖고오기</h1>
      {data.map((elm) => (
        <div> {elm.content}</div>
      ))}
    </>
  );
}

export default App;
