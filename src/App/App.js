//import { consoleSeparator } from './helpers/consoleSeparator';

import { Fragment, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

/* const dummyMovies = [
  {
    id: 1,
    title: 'Some Dummy Movie',
    openingText: 'This is the opening text of the movie',
    releaseDate: '2021-05-18',
  },
  {
    id: 2,
    title: 'Some Dummy Movie 2',
    openingText: 'This is the second opening text of the movie',
    releaseDate: '2021-05-19',
  },
]; */
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieHandler = async function () {
    try {
      setIsLoading(true);

      const filmsResp = await fetch('https://swapi.dev/api/films/');

      let { results } = await filmsResp.json();

      results = results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(results);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found No Movies!</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </Fragment>
  );
}

export default App;
