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
      <hr />
      <Input todoList={todoList} setTodoList={setTodoList}></Input>
    </>
  );
}

//컴포넌트 분리하기
function TodoList({ todoList }) {
  return (
    <>
      <ol>
        {todoList.map((todo) => (
          <List todo={todo} key={todo.id}></List>
        ))}
      </ol>
    </>
  );
}

//리스트 컴포넌트
function List({ todo }) {
  return <li>{todo.content}</li>;
}

//input 컴포넌트
function Input({ todoList, setTodoList }) {
  //input상태 관리
  const [inputValue, setInputValue] = useState("");

  //onClick이벤트 (버튼추가하면 배열 새롭게 생성)
  const addTodo = () => {
    const newTodo = {
      id: Number(new Date()),
      content: inputValue,
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setInputValue(""); //input창 비워주기
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="할 일을 입력하기."
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        //엔터하면 배열 새롭게 생성이 되는 로직
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
      />
      <button onClick={addTodo}>추가하기</button>
    </div>
  );
}
export default App;
