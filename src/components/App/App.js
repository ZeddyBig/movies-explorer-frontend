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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  /* --- Для поиска по разделу фильмов --- */
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [shortMovieSwitch, setShortMovieSwitch] = useState(false);
  /* --- Для поиска по разделу сохранённых фильмов --- */
  const [searchValueSaved, setSearchValueSaved] = useState('');
  const [shortMovieSwitchSaved, setShortMovieSwitchSaved] = useState(false);

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
          .then((movies) => {
            setSavedMovies(movies);
            setSavedMovies((state) => state.filter((movie) => movie.owner === currentUser.id));
            localStorage.setItem('saved-movies', JSON.stringify(savedMovies));
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

        /* --- MOVIES PART --- */

        const localFiltredMovies = localStorage.getItem('filtered-movies');
        if (localFiltredMovies !== null) {
          setFilteredMovies(JSON.parse(localFiltredMovies));
        } else {
          setFilteredMovies([]);
        }
        
        const localSearchValue = localStorage.getItem('search-value-movies');
        if (localSearchValue !== null) {
          setSearchValue(localSearchValue);
        } else {
          localStorage.setItem('search-value-movies', '');
          setSearchValue('');
        }

        const localCheckMovies = localStorage.getItem('checked-movies');
        if (localCheckMovies !== null) {
            setShortMovieSwitch(JSON.parse(localCheckMovies));
        } else {
          localStorage.setItem('checked-movies', false);
            setShortMovieSwitch(false);
        }     
    }
  }, [loggedIn, currentUser.id]);

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
            setName(data.name);
            setEmail(data.email);
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
          tokenCheck();
          localStorage.setItem('jwt', data.token);
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
        setName(obj.name);
        setEmail(obj.email);
      })
      .catch((err) => 
      {
        console.log(err);
        setMessage({
          success: false,
          message: 'Введённый емейл занят',
        });
        setIsInfoTooltipOpen(true);
      });
  }

  const signOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('checked-movies');
    localStorage.removeItem('search-value-movies');
    localStorage.removeItem('filtered-movies');
    localStorage.removeItem('movies');
    localStorage.removeItem('saved-movies');
    setMovies([]);
    setSavedMovies([]);
    setFilteredMovies([]);
    setSearchValue('');
    setShortMovieSwitch(false);
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

  const isShortMovie = (movie) => {
    return (
      movie.duration <= 40 ? true : false
    )
  }

  function searchMovieShort(movieList) {
    localStorage.setItem('search-value-movies', searchValue);
    return movieList.filter(movie => {
      if (searchValue === '') {
        localStorage.setItem('search-value-movies', '');
        return (
          false
        )
      } else {
        return (
          !shortMovieSwitch
            ? (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())) && (isShortMovie(movie))
            : movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        )
      }
    })
  }

  function searchMovieList(movieList) {
    return movieList.filter(movie => {
      if (searchValue === '') {
        return (
          false
          /* --- Оставляю тут на случай, если при пустом значени поиска нужно будет вывести вообще все фильмы --- */
          /*shortMovieSwitch
          ? (movie) && (isShortMovie(movie))
          : movie*/
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

  function searchSavedMovieList(movieList) {
    return movieList.filter(movie => {
      if (searchValueSaved === '') {
        return (
          shortMovieSwitchSaved
          ? (movie) && (isShortMovie(movie))
          : movie
        )
      } else {
        return (
          shortMovieSwitchSaved
          ? (movie.nameRU.toLowerCase().includes(searchValueSaved.toLowerCase())) && (isShortMovie(movie))
          : movie.nameRU.toLowerCase().includes(searchValueSaved.toLowerCase())
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
                name={name}
                email={email}
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
                setShortMovieSwitch={setShortMovieSwitch}
                handleSaveMovie={handleSaveMovie}
                searchMovieList={searchMovieList}
                handleDeleteMovie={handleDeleteMovie}
                searchMovieShort={searchMovieShort}
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
                searchValueSaved={searchValueSaved}
                setSearchValueSaved={setSearchValueSaved}
                savedMovies={savedMovies}
                widthWindow={widthWindow}
                searchSavedMovieList={searchSavedMovieList}
                handleDeleteMovie={handleDeleteMovie}
                shortMovieSwitchSaved={shortMovieSwitchSaved}
                setShortMovieSwitchSaved={setShortMovieSwitchSaved}
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
