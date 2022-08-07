import './App.css';
 import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Main />
        } />
        <Route path="/signup" element={
          <Register />
        } />
        <Route path="/signin" element={
          <Login />
        } />
      </Routes>
    </div>
  );
}

export default App;
