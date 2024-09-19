export default class TheMovieDbService {
  url: string;
  language: string;
  token: string;

  constructor() {
    this.url = process.env.REACT_APP_THE_MOVIE_DB_URL!;
    this.language = "pt-BR";
    this.token = process.env.REACT_APP_THE_MOVIE_DB_TOKEN!;
  }

  private getHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    };
  }

  async searchMovie({ query, page = 1 }: { query: string; page?: number }) {
    const headers = this.getHeaders();
    const response = await fetch(
      `${this.url}/search/movie?query=${query}&language=${this.language}&page=${page}`,
      {
        headers,
      }
    );
    return await response.json();
  }

  async getMovieDetails(id: string) {
    const headers = this.getHeaders();
    const response = await fetch(
      `${this.url}/movie/${id}?language=${this.language}`,
      {
        headers,
      }
    );
    return await response.json();
  }

  async getFavoriteMovies() {
    const headers = this.getHeaders();
    const response = await fetch(
      `${this.url}/account/${process.env.REACT_APP_THE_MOVIE_DB_ACCOUNT_ID}/favorite/movies`,
      {
        headers,
      }
    );
    return await response.json();
  }

  async addToFavorites(media_id: number) {
    const headers = this.getHeaders();
    const response = await fetch(
      `${this.url}/account/${process.env.REACT_APP_THE_MOVIE_DB_ACCOUNT_ID}/favorite`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          media_type: "movie",
          media_id,
          favorite: true,
        }),
      }
    );
    return await response.json();
  }

  async removeFromFavorites(media_id: number) {
    const headers = this.getHeaders();
    const response = await fetch(
      `${this.url}/account/${process.env.REACT_APP_THE_MOVIE_DB_ACCOUNT_ID}/favorite`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          media_type: "movie",
          media_id,
          favorite: false,
        }),
      }
    );
    return await response.json();
  }
}
