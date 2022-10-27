import './App.css';

// 리덕스
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// 라우터
import {Routes, Route} from 'react-router-dom';

// layout
import Header from './layout/Header';
import Navbar from './layout/Navbar';

// page
import Main from './page/Main';
import Login from './page/Login';
import Join from './page/Join';


function reducer(currentState, action) {
  if(!currentState) {
    
  }
}

const store = createStore(reducer);

function App() {
  
  // 1. 고정되어 있는 header를 하나 제작
  //  => JS(B)라는 내용의 h3 태그
  //  => 클릭 시 메인 창으로 이동
  
  // 2. 고정되어 있는 navbar를 하나 제작
  //  => 버튼 2개 (로그인, 회원가입)
  //  => 클릭 시 각각 페이지로 이동

  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Main></Main>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/Join' element={<Join></Join>}></Route>
    </Routes>
    </>
  );
}

export default App;
