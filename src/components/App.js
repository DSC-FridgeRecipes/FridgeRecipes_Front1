import React, { useState } from 'react';
import AppRouter from './Router';

function App() {   // 여기서 모든 로직을 다룬다
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <AppRouter isLoggedIn={isLoggedIn} />;   //prop 전달
}

export default App;