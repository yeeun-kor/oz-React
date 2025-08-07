import "./App.css";
import ListItem from "./ListItem";

function App() {
  //datas배열
  const datas = [
    { id: "John", name: "John", age: 20 },
    { id: "Bob", name: "Bob", age: 30 },
    { id: "Jane", name: "Jane", age: 35 },
    { id: "Alice", name: "Alice", age: 29 },
  ];
  return (
    <>
      {/* 각 요소들을 순회하며 ListItem컴포넌트를 랜더링  */}
      {datas.map((data) => {
        return <ListItem key={data.id} data={data}></ListItem>;
      })}
    </>
  );
}

export default App;
