import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";

function App() {
  //useNavigate()
  const navigate = useNavigate();
  //useNavigate()
  const location = useLocation();
  console.log(location.pathname);
  console.log(location.search);

  return (
    <>
      <h1>React Router예제</h1>
      <div>
        {/* <Link to={"/main"}>MainPage </Link>
        <Link to={"/mypage"}>MyPage </Link>
        <Link to={"/test"}>TestPage </Link> */}
        <button onClick={() => navigate("/main")}>메인</button>
        <button onClick={() => navigate("/mypage")}>마이페이지</button>
        <button onClick={() => navigate("/test")}>테스트페이지</button>
      </div>
      <div>
        <button onClick={() => navigate(1)}>앞으로가기</button>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </div>
      <Routes>
        {/* main주소 뒤에 특정주소를 덧붙인다. */}
        <Route path="/main/:hobby" element={<Main></Main>}></Route>
        <Route path="/mypage" element={<div>MyPage🐿️</div>}></Route>
        <Route path="/test" element={<div>TestPage🐿️</div>}></Route>
      </Routes>
    </>
  );
}

function Main() {
  const params = useParams();
  console.log(params.hobby);
  return <div>MainPage🐿️</div>;
}
export default App;
