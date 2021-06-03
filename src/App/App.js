//import { consoleSeparator } from './helpers/consoleSeparator';

import { Fragment, useState } from 'react';

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
  const [error, setError] = useState(false);

  const fetchMovieHandler = async function () {
    try {
      setIsLoading(true);
      const url = 'https://swapi.dev/api/films/';
      const filmsResp = await fetch(url);

      if (!filmsResp.ok) {
        if (filmsResp.status === 404)
          throw new Error(
            `${filmsResp.status}: Cannot retrive movies using (${url}) URL.`
          );

        throw new Error(`${filmsResp.status}: Something Went Wrong`);
      }

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
      console.error(`${error} 💥💥💥`);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  let content = <p>Found no movie!</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = 'Loading...';
  }

  return (
    <Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </Fragment>
  );
}

export default App;
