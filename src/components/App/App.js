import './App.css';
 import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';

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
      </Routes>
    </div>
  );
}

export default App;
