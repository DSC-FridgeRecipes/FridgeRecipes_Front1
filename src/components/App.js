import React, { useState } from 'react';
import AppRouter from './Router';
import "../css/App.css"
import HeaderContainer from '../css/Header/HeaderContainer'

function App() {   // 여기서 모든 로직을 다룬다
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
  <div>
  <HeaderContainer/>
  <AppRouter isLoggedIn={isLoggedIn} />
  </div>
  );   //prop 전달
}

export default App;