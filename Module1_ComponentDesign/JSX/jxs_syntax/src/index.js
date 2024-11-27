import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Own_jsx_elements/header';
import Main from './Own_jsx_elements/main';
import MainMenu from './Own_jsx_elements/main_menu';
import MyComponent from './Own_jsx_elements/parentElement';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Khai báo 2 biến kiểu: Array và Object
const recipes = ["Bánh mì", "Xôi", "Phở", "Bún"];
const courses = {
  "FER202": 3,
  "SDN301": 2,
  "PRF192": 4
}

root.render(
  <div>
    {/* Đọc dữ liệu từ 2 biến trên */}
    {/* <ul>
      {
        recipes?.map(e => (
          <li key={e}>{e}</li>
        ))
      }
    </ul>

    <ul>
      {
        Object.keys(courses).map(k => (
          <li key={k}>{k} - {courses[k]}</li>
        ))
      }
    </ul> */}

    {/* Gọi Owner JSX element */}
    {/* <Header>
      <MainMenu>
        <a href='./'>Home</a><br/>
        <a href='./'>Contact</a>
      </MainMenu>
    </Header>
    <Main/> */}

    {/* Sử dụng các component trong cùng Namespace */}
    {/* <MyComponent>
      <MyComponent.First/>
      <MyComponent.Second/>
    </MyComponent> */}

    
  </div>
);