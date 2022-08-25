import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState({ success: false, message: "" });
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [shortMovieSwitch, setShortMovieSwitch] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserData()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
        
        mainApi.getSavedMovies()
          .then((savedMovies) => {
            setSavedMovies(savedMovies);
            setSavedMovies((state) => state.filter((movie) => movie.owner === currentUser.id));
          })
          .catch((err) => console.log(err)); 
        
        moviesApi.getMovies()
          .then((res) => {
              setMovies(res);
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

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')){
      const jwt = localStorage.getItem('jwt');
      moviesAuth.getContent(jwt)
        .then((data) => {
          if (data){
            let userData = {
              name: data.name,
              email: data.email
            }
            setLoggedIn(true);
            setName(userData.name);
            setEmail(userData.email);
            setCurrentUser(data);
            history("/movies");
          }
        })
        .catch((err) => console.log(`err: ${err}`));
    }
  }

  const handleLogin = ({ email, password }) => {
    return moviesAuth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          tokenCheck();
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

  const handleEdit = (obj) => {
    mainApi.updateUserData(obj)
      .then((res) => {
        setCurrentUser(res);
        setName(obj.name);
        setEmail(obj.email);
      })
      .catch((err) => console.log(err));
  }

  const signOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setName("");
    setEmail("");
    history('/signin');
  }

  function checkSavedMovie(newMovie, movies) {
    return (movies.some((movie) => (movie.movieId === newMovie.id.toString())));
  }

  function checkMovies(movies, savedMovies) {
    movies.map((movie) => (
      checkSavedMovie(movie, savedMovies) ? movie.isSaved = true : movie.isSaved = false
    ))
  }
  checkMovies(movies, savedMovies);

  const handleSaveMovie = (movie) => {
    if (!checkSavedMovie(movie, savedMovies)) {
      mainApi.saveMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies])
      })
      .catch((err) => console.log(err));
    } else {
      movie.isSaved = true;
    }
  }

  const handleDeleteMovie = (id) => {
    console.log(id);
    mainApi.deleteMovie(id)
      .then((res) => {
        setSavedMovies((state) => state.filter((movie) => movie._id !== id));
      })
      .catch((err) => console.log(err));
  }

  const shortMovieChange = (e) => {
    return e ? setShortMovieSwitch(true) : setShortMovieSwitch(false)
  }
  const isShortMovie = (movie) => {
    return (
      movie.duration <= 40 ? true : false
    )
  }

  function searchMovieList(movieList) {
    return movieList.filter(movie => {
      return (
        shortMovieSwitch
        ? (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())) && (isShortMovie(movie))
        : movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      )
    });
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile 
                isLoggedIn={loggedIn}
                handleLogout={signOut}
                name={name}
                email={email}
                handleEdit={handleEdit}
              />
            </ProtectedRoute>
          } />
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                isLoggedIn={loggedIn}
                isMovies={true}
                isSavedMovies={false}
                movies={movies}
                setSearchValue={setSearchValue}
                shortMovieChange={shortMovieChange}
                handleSaveMovie={handleSaveMovie}
                searchMovieList={searchMovieList}
                handleDeleteMovie={handleDeleteMovie}
              />
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                isLoggedIn={loggedIn}
                isMovies={false}
                isSavedMovies={true}
                movies={savedMovies}
                setSearchValue={setSearchValue}
                shortMovieChange={shortMovieChange}
                searchMovieList={searchMovieList}
                handleDeleteMovie={handleDeleteMovie}
              />
            </ProtectedRoute>
          } />
          <Route path="/" element={
            <Main isLoggedIn={loggedIn} isMain={true}/>
          } />
          <Route path="/signup" element={
            <Register handleRegister={handleRegister} linkTo={"/signin"}/>
          } />
          <Route path="/signin" element={
            <Login handleLogin={handleLogin} linkTo={"/signup"} />
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
