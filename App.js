import './App.css';
import { getMovieList, searchMovie } from "./api"
import { useEffect, useState } from 'react';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <div className="Movie-image" src='${process.env.REACT_APP_BASEIMGURL}/movie.poster_path}'/>
          <div className="Movie-date">{movie.release.date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = (q) => {
    console.log({ q })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>SEMS MOVIE MANIA</h1>
        <input
          placeholder='cari apa hayo...'
          className='Movie-search'
          onChange={({ target }) => search(target.value)}
          />
          <div className="Movie-container">
            <div className="Movie-wrapper">
              <div className="Movie-title"></div>
              <div className="Movie-image"></div>
              <div className="Movie-date"></div>
              <div className="Movie-rate"></div>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
