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

  async searchMovie(query: string) {
    const headers = this.getHeaders();
    const response = await fetch(
      `${this.url}/search/movie?query=${query}&language=${this.language}`,
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
}
