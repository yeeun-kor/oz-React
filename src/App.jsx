import "./App.css";
import { v4 as uuidv4 } from "uuid"; //uuid설치하여서 create UUID
function App() {
  const datas = [
    { id: uuidv4(), name: "John", age: 20 },
    { id: uuidv4(), name: "Bob", age: 30 },
    { id: uuidv4(), name: "Jane", age: 35 },
    { id: uuidv4(), name: "Alice", age: 29 },
  ];

  return (
    <div>
      {datas.map((data) => {
        return (
          // map()메서드 안에서는 고유한 key프로퍼티값이 필요하다.
          <div key={data.id}>
            {data.name} & {data.age}&{data.id}
          </div>
        );
      })}
    </div>
  );
}

export default App;
