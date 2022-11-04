
import Home from "./pages/Home/Home"

import React from 'react';
// import ReactDOM from 'react-dom/client';
import { Routes ,Route } from 'react-router-dom';
import Login from "./pages/auth/login";


const App = () => {
  return (
    // <div className="text-3xl font-roboto h-full w-full absolute">
    //   <Home />
    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
