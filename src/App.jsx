import { useEffect, useState } from "react";

const someVar = "test";
const unchangedValue = "hello";
// const로 저장 시 자동으로 변경되는지 체크
var x = 1;

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, []); // react-hook 경고 뜨는지 확인

  const handleClick = () => {
    setItems((prev) => [...prev, "new item"]);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <div onClick={handleClick}>Click me</div>
      <ul>
        {items.map((item, index) => (
          // key 누락으로 경고 확인 후 =>  <li key={index}>{item}</li> key index 오류 확인
          <li>{item}</li>
        ))}
      </ul>
      <img src="das" /> {/* 접근성 오류 뜨는지 확인 */}
    </div>
  );
}
