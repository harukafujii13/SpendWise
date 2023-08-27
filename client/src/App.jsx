import { react } from 'react';
import SignUp from './components/signUp/signUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/logIn/login';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
