import { react } from 'react';
import SignUp from './components/signUp/signUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/logIn/login';
import Homepage from './components/homepage/homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={<SignUp />}></Route>
        <Route
          path="/login"
          element={<Login />}></Route>
        <Route
          path="/home"
          element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
