import { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
/*import movie1 from "../../images/Movies/33_slova_o_disaine.png";
import movie2 from "../../images/Movies/kinoalmanah_100_let_disaina.png";
import movie3 from "../../images/Movies/V_pogone_za_Benksy.png";
import movie4 from "../../images/Movies/Baskya_vzriv_realnosty.png";
import movie5 from "../../images/Movies/Beg_eto_svoboda.png";
import movie6 from "../../images/Movies/Knigotorgovci.png";
import movie7 from "../../images/Movies/Kogda_ya_dumayu_o_Germanii.png";
import movie8 from "../../images/Movies/Gimme_Danger_Istorya_Iggi_ i_The_Stooges.png";
import movie9 from "../../images/Movies/Jennys_Malenkaya_devochka_grustit.png";
import movie10 from "../../images/Movies/Soberis_pered_prijkom.png";
import movie11 from "../../images/Movies/Pi_J_Harvy_A_dog_called_money.png";
import movie12 from "../../images/Movies/Po_volnam_Iskusstvo_zvuka_v_kino.png";*/

function MoviesCardList(props) {

    const durationTransform = (duration) => {
        return (
            duration > 60 ? `${Math.floor(duration/60)}ч ${Math.floor(duration%60)}м` : `${duration}м`
        )
    }

    return (
        <div className="movies-card-list">
            <div className="movies-card-list__line"/>
            <div className={`movies-card-list_zero ${props.searchMovieList(props.movies).length ? 'movies-card-list__disable': ``}`}>Фильмы не найдены</div>
            <ul className="movies-card-list__list">
            {
                !props.isSavedMovies 
                ?
                    props.searchMovieList(props.movies).map((movie, index) => {
                        return (
                            <MoviesCard 
                                thumbnail={`https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`}
                                title={movie.nameRU}
                                duration={durationTransform(movie.duration)}
                                isSavedMovies={props.isSavedMovies}
                                key={index}
                                handleSaveMovie={props.handleSaveMovie}
                                movie={movie}
                                handleDeleteMovie={props.handleDeleteMovie}
                                isMovies={props.isMovies}
                            />
                        )
                    })
                :
                    props.searchMovieList(props.movies).map((movie, index) => {
                        return (
                            <MoviesCard 
                                thumbnail={movie.thumbnail}
                                title={movie.nameRU}
                                duration={durationTransform(movie.duration)}
                                isSavedMovies={props.isSavedMovies} 
                                key={index}
                                movie={movie}
                                isMovies={props.isMovies}
                                handleDeleteMovie={props.handleDeleteMovie}
                            />
                        )
                    })
            }
            {/*
                <MoviesCard thumbnail={movie1} title={'33 слова о дизайне'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
                <MoviesCard thumbnail={movie2} title={'Киноальманах «100 лет дизайна»'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
                <MoviesCard thumbnail={movie3} title={'В погоне за Бенкси'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
                <MoviesCard thumbnail={movie4} title={'Баския: Взрыв реальности'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
                <MoviesCard thumbnail={movie5} title={'Бег это свобода'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
                <MoviesCard thumbnail={movie6} title={'Книготорговцы'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
                <MoviesCard thumbnail={movie7} title={'Когда я думаю о Германии ночью'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
                <MoviesCard thumbnail={movie8} title={'Gimme Danger: История Игги и The Stooges'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
                <MoviesCard thumbnail={movie9} title={'Дженис: Маленькая девочка грустит'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
                <MoviesCard thumbnail={movie10} title={'Соберись перед прыжком'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
                <MoviesCard thumbnail={movie11} title={'Пи Джей Харви: A dog called money'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
                <MoviesCard thumbnail={movie12} title={'По волнам: Искусство звука в кино'} duration={'1ч 17м'} shortFilm={true} isSaved={props.isSaved}/>
            */}
            </ul>
            <div className="movies-card-list__more">
                <button type="button" className={`movies-card-list__more-button ${props.isSaved ? `movies-card-list__disable` : ``}`}>Ещё</button>
            </div>
        </div>
    )
}

export default MoviesCardList;