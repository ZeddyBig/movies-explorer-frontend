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
import useCurrentWidth from '../../utils/useCurrentWidth';
import InfoTooltip from '../../components/InfoTooltip/InfoTooltip';

const App = () => {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [message, setMessage] = useState({ success: false, message: "" });
  const history = useNavigate();
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [shortMovieSwitch, setShortMovieSwitch] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const widthWindow = useCurrentWidth();

  const fetchMovies = () => {
    moviesApi.getMovies()
      .then((res) => {
        setMovies(res);
        localStorage.setItem('movies', JSON.stringify(res));
      })
      .catch((err) => console.log(err));
  }

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

        const localMovies = localStorage.getItem('movies');
        if (localMovies) {
          try {
            setMovies(JSON.parse(localMovies));
          } catch (err) {
            console.log('Parse error: ', err);
            localStorage.removeItem('movies');
            fetchMovies();
          }
        } else {
          fetchMovies();
        }
    }
  }, [loggedIn, currentUser.id]);

  console.log(loggedIn);

  const handleRegister = ({ name, email, password }) => {
    return moviesAuth.register(name, email, password)
      .then((res) => {
        if (res) {
          setMessage({
            success: true,
            message: "Вы успешно зарегистрировались!",
          });
          handleLogin({email, password});
        }
      })
      .catch((err) => {
        setMessage({
          success: false,
          message: err.message,
        });
        setIsInfoTooltipOpen(true);
      });
  }

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')){
      const jwt = localStorage.getItem('jwt');
      moviesAuth.getContent(jwt)
        .then((data) => {
          if (data){
            setLoggedIn(true);
            setCurrentUser(data);
          } else {
            setLoggedIn(false);
            history.push('/signin');
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
          history("/movies");
        }
      })
      .catch((err) => {
        setMessage({
          success: false,
          message: "Что-то пошло не так! Попробуйте ещё раз.",
        });
        setIsInfoTooltipOpen(true);
      });
  }

  const handleEdit = (obj) => {
    mainApi.updateUserData(obj)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }

  const signOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history('/');
  }

  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(movie)
    .then((savedMovie) => {
      setSavedMovies([...savedMovies, savedMovie]);
    })
    .catch((err) => console.log(err));
  }

  const findId = (id) => {
    let movieSaved = savedMovies.find((movie) => (movie.movieId === id.toString()));
    return (movieSaved._id);
  }

  const handleDeleteMovie = (id) => {
    mainApi.deleteMovie(findId(id))
      .then((res) => {
        setSavedMovies((state) => state.filter((movie) => movie._id !== findId(id)));
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
      if (searchValue === '') {
        return (
          shortMovieSwitch
          ? (movie) && (isShortMovie(movie))
          : movie
        )
      } else {
        return (
          shortMovieSwitch
          ? (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())) && (isShortMovie(movie))
          : movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        )
      }
    })
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  function closeInfoTooltip() {
    setIsInfoTooltipOpen(false);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile 
                isLoggedIn={loggedIn}
                handleLogout={signOut}
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
                filteredMovies={filteredMovies}
                setFilteredMovies={setFilteredMovies}
                movies={movies}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                savedMovies={savedMovies}
                widthWindow={widthWindow}
                shortMovieSwitch={shortMovieSwitch}
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
                filteredMovies={filteredMovies}
                setFilteredMovies={setFilteredMovies}
                movies={savedMovies}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                savedMovies={savedMovies}
                widthWindow={widthWindow}
                shortMovieSwitch={shortMovieSwitch}
                shortMovieChange={shortMovieChange}
                searchMovieList={searchMovieList}
                handleDeleteMovie={handleDeleteMovie}
              />
            </ProtectedRoute>
          } />
          <Route path="/signup" element={
            <Register handleRegister={handleRegister} linkTo={"/signin"}/>
          } />
          <Route path="/signin" element={
            <Login handleLogin={handleLogin} linkTo={"/signup"} />
          } />
          <Route path="/" element={
            <Main isLoggedIn={loggedIn} isMain={true}/>
          } />
          <Route path="*" element={
            <NotFound />
          } />
        </Routes>
        <InfoTooltip name={'info-tooltip'} isOpen={isInfoTooltipOpen} onClose={closeInfoTooltip} message={message.message} success={message.success}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
