import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //json데이터 가지고 오기
  const [data, setData] = useState([]);

  // //useState()로 fetch()시간차 관리 👨‍💼 첫 랜더링만 받와야 한다 (+빈배열)
  // //만약 의존성 배열이 없다면? 모든 리랜더링 상황에서 호출이 될 것인디,
  // //매번 json 파일 불러와야하니깐 랜더링 시간 오래걸림.
  // useState(() => {
  //   fetch("http://localhost:3000/data")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);
  return (
    <>
      <h1>데이터 목록 JSON 갖고오기</h1>
      {data.map((elm) => (
        <div> {elm.content}</div>
      ))}
      <MouseFollwer></MouseFollwer>
      <ScrollIndicator></ScrollIndicator>
      <div style={{ height: "300vh" }}></div>
    </>
  );
}

//마우스 커서 이동 위치를 조작하는 함수
const MouseFollwer = () => {
  //1️⃣상태 설정
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // //2️⃣실시간으로 이동하는 마우스 커버 상태 관리
  useEffect(() => {
    //mouse 이벤트 핸들러 함수 , 마우스가 이동하는 위치값 받아오겠다.
    //이벤트 객체의 client.x로 받아오면 된다.
    const mouseHandler = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    //window이벤트에서 방금 만든 이벤트 핸들러 함수 넣기
    //mouseover = 버블링 현상으로 자식 요소간 움직일때만 마우스 반응이 올라옴
    //mousemove = 마우스 프레임 간격이 짧아서 빠릿빠릿함.
    window.addEventListener("mousemove", mouseHandler);
    // clen-up 함수
    return () => {
      window.removeEventListener("mousemove", mouseHandler);
    };
  }, []);

  //3️⃣ 따라다니는 마우스 리턴해서 화면에 jsx로 랜더링 되게 하기.
  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "40px",
        height: "40px",
        backgroundColor: "red",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)", // 커서 위치를 정확히
      }}
    ></div>
  );
};

//🚀스크롤 인디케이터 컴포넌트 생성
//ScrollIndicator? : 화면의 전체 길이와, 스크롤이 내려간 길이의 비율을 계산하여 %로 화면 상단 부분에 유동적으로 동기화 시켜서 보여주는 작업.
const ScrollIndicator = () => {
  //상단 스크롤의 가로길이를 상태로 설정
  const [scrollWidth, setScrollWidth] = useState(0);
  //상태관리
  useEffect(() => {
    //이벤트 핸들러
    const scrollHandler = () => {
      //내가 스크롤 얼마나 내렸는지
      const scrollTop = window.scrollY;
      //현재 화면의 높이( html문서의 높이-현재 화면의 높이)
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      //현재 스크롤창이 문서의 높이중 몇퍼센트를 차지하는지 100분율 계산
      const scrollPercantage = (scrollTop / windowHeight) * 100;
      setScrollWidth(scrollPercantage);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollWidth}%`,
        height: "10px",
        backgroundColor: "red",
      }}
    ></div>
  );
};
export default App;
