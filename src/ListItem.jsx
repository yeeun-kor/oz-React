//ListItem 컴포넌트 만들기
//App.생성된 배열의 요소값들을 컴포넌트의 인수로 받아옴
export default function ListItem({ data }) {
  return (
    <ul>
      <li>
        {data.name} 나이 : {data.age}
      </li>
    </ul>
  );
}
