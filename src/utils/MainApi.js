class MainApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
      // тело конструктора
    }

    _getResponseData(res) {
        return res.ok ? res.json() : Promise.reject(res.status);
    }

    getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {
            credentials: 'include',
            headers: this._headers
        })
        .then(res => this._getResponseData(res))
    }

    updateUserData(user) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                email: user.email,
                name: user.name
            })
        })
        .then(res => this._getResponseData(res))
    }

    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            credentials: 'include',
            headers: this._headers
        })
        .then(res => this._getResponseData(res))
    }

    saveMovie(obj) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                country: obj.country,
                director: obj.director,
                duration: obj.duration,
                year: obj.year,
                description: obj.description,
                image: `https://api.nomoreparties.co/${obj.image.url}`,
                trailerLink: obj.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${obj.formats.image.url}`,
                movieId: obj.id,
                nameRU: obj.nameRU,
                nameEN: obj.nameEN,
                owner: obj.owner,
            })
        })
        .then(res => this._getResponseData(res))
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: "DELETE",
            credentials: 'include',
            headers: this._headers
        })
        .then(res => this._getResponseData(res))
    }
}
  
export const mainApi = new MainApi({
    baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
    headers: {
      'Content-Type': 'application/json'
    }
});