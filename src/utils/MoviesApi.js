class MoviesApi {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
  
    _getResponseData(res) {
        return res.ok ? res.json() : Promise.reject(res.status);
    }
  
    getMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: this._headers,
        })
        .then((res) => this._getResponseData(res))
    }
}
  
export const moviesApi = new MoviesApi ({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});