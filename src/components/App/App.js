import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as moviesAuth from '../../utils/moviesAuth';
import ProtectedRoute from '../../utils/ProtectedRoute';

const App = () => {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setloggedIn] = useState(false);
  const [message, setMessage] = useState({ success: false, message: "" });
  const history = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserData()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  const handleRegister = ({ name, email, password }) => {
    return moviesAuth.register(name, email, password).then((res) => {
      if (res) {
        setMessage({
          success: true,
          message: "Вы успешно зарегистрировались!",
        });
        history('/signin');
      }
    })
    .catch((err) => {
      setMessage({
        success: false,
        message: "Что-то пошло не так! Попробуйте ещё раз.",
      });
      console.log(`err: ${err}`);
    });
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile isLoggedIn={!loggedIn} />
            </ProtectedRoute>
          } />
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies isLoggedIn={!loggedIn} isMovies={true} />
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies isLoggedIn={!loggedIn} isSavedMovies={true} />
            </ProtectedRoute>
          } />
          <Route path="/" element={
            <Main isLoggedIn={loggedIn} isMain={true}/>
          } />
          <Route path="/signup" element={
            <Register handleRegister={handleRegister} linkTo={"/signin"}/>
          } />
          <Route path="/signin" element={
            <Login />
          } />
          <Route path="*" element={
            <NotFound />
          } />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
