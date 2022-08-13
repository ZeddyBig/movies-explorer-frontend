import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

const App = () => {

  const [loggedIn, setloggedIn] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Main isLoggedIn={!loggedIn} isMain={true}/>
        } />
        <Route path="/profile" element={
          <Profile isLoggedIn={loggedIn} />
        } />
        <Route path="/movies" element={
          <Movies isLoggedIn={loggedIn} isMovies={true} />
        } />
        <Route path="/saved-movies" element={
          <SavedMovies isLoggedIn={loggedIn} isSavedMovies={true} />
        } />
        <Route path="/signup" element={
          <Register />
        } />
        <Route path="/signin" element={
          <Login />
        } />
        <Route path="*" element={
          <NotFound />
        } />
      </Routes>
    </div>
  );
}

export default App;
