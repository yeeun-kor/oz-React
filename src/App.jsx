import { useEffect, useState } from 'react';

export default function App() {
  const people = [
    {
      id: 0,
      name: '라이언',
      profession: 'mathematician',
    },
    {
      id: 1,
      name: '어피치',
      profession: 'chemist',
    },
    {
      id: 2,
      name: '제이지',
      profession: 'physicist',
    },
    {
      id: 3,
      name: '춘식이',
      profession: 'chemist',
    },
    {
      id: 4,
      name: '콘',
      profession: 'astrophysicist',
    },
  ];
  const chemist = people
    .filter((person) => person.profession === 'chemist')
    //여기까지 하면, chemist인 객체가 나옴
    //근데 우린 객체만 띨롱~ 나오는게 아니라, 각 객체의 요소를 꺼내서 순회할거임
    //map으로 돌려버렷

    .map((chemist) => (
      //이렇게 map으로 돌리면
      /* 아래처럼 띨롱 나옴!
    우리는 여기서 이름만 뽑아서 li로 설정할것
    이때 map으로 접근한 애는 무조건 key프로퍼티 설정하자.
     {
      id: 3,
      name: "춘식이",
      profession: "chemist",
    }
    */
      <li key={chemist.id}>{chemist.name}</li>
    ));
  return (
    <div>
      <ul>{chemist}</ul>
    </div>
  );
}
