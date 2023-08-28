import { react } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpensePage from './page/ExpensePage/ExpensePage';
import HomePage from './page/homepage/homepage';
import IncomePage from './page/IncomePage/IncomePage';
import LoginPage from './page/LoginPage/LoginPage';
import SignupPage from './page/SignupPage/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={<SignupPage />}></Route>
        <Route
          path="/login"
          element={<LoginPage />}></Route>
        <Route
          path="/home"
          element={<HomePage />}></Route>
        <Route
          path="/income"
          element={<IncomePage />}></Route>
        <Route
          path="/expense"
          element={<ExpensePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
