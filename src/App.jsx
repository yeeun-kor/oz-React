import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "양치하기" },
    { id: 2, content: "물 마시기" },
    { id: 3, content: "피크민 하기" },
  ]);

  return (
    <>
      <h1>todoList _ yeeun</h1>
      <TodoList todoList={todoList}></TodoList>
    </>
  );
}

//컴포넌트 분리하기
function TodoList({ todoList }) {
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <List todo={todo} key={todo.id}></List>
        ))}
      </ul>
    </>
  );
}

//리스트 컴포넌트
function List({ todo }) {
  return <li>{todo.content}</li>;
}

export default App;
