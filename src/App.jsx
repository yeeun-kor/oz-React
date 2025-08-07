import "./App.css";
import ListItem from "./ListItem";
import { useState } from "react";

function App() {
  //useState함수 사용하기
  const [datas, setDatas] = useState([
    { id: "John", name: "John", age: 20 },
    { id: "Bob", name: "Bob", age: 30 },
    { id: "Jane", name: "Jane", age: 35 },
    { id: "Alice", name: "Alice", age: 29 },
  ]);

  return (
    <div>
      {datas.map((data) => {
        return (
          // map()메서드 안에서는 고유한 key프로퍼티값이 필요하다. 
          <div key={data.id}>
            {data.name} & {data.age}
          </div>
        );
      })}
    </div>
  );
}

export default App;
