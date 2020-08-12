import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from './Layout';
import Form from './Form';
import MoviesGrid from './MoviesGrid';
import Button from './Button';



function App() {

  const [queries, setQueries] = useState({
    popularity: '',
    year: '',
    score: '',
    with: '',
    genre: ''
  })
  const [genres, setGenres] = useState('')

  const onChangeQuery = (e) => {
    switch (e.target.name) {
      case 'popularity':
        setQueries({
          ...queries, 
          popularity: e.target.value
        });
        break;
      case 'year':
        setQueries({
          ...queries, 
          year: e.target.value
        });
        break;
      case 'score':
        setQueries({
          ...queries, 
          score: e.target.value
        });
        break;
      case 'genre':
        if (e.target.value === '') {
          setQueries({
            ...queries, 
            with: ``,
            genre: ``,
          })
          } else {
            setQueries({
            ...queries, 
            with: `&with_genres=${e.target.value}`,
            genre: e.target.value
          })
        } 
        break;
      default:
        break
    }
  }

  const [movies, setMovies] = useState('')
  
  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=fa0290d03c7bf4373b25da8a09a1789f&language=en-US${queries.popularity !== '' ? `&sort_by=${queries.popularity}` : '&sort_by=popularity.desc'}&include_adult=true&include_video=false&page=1&vote_count.gte=30${queries.score ? `&vote_average.gte=${queries.score - 3}&vote_average.lte=${queries.score}` : ''}${queries.with}${queries.year ? `&release_date.lte=${queries.year}-01-01&release_date.gte=${queries.year - 20}-01-01` : ''}`;

  const fetchMovies = async () => {
    
    const res = await axios.get(URL);
    const movieList = await res.data;

    console.log(URL);
    setMovies(movieList.results);
    console.log(movies);
  };


  useEffect(() => {
    const fetchGenres = async () => {
      const res = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=fa0290d03c7bf4373b25da8a09a1789f&language=en-US');
  
      setGenres(res.data)
    };
    fetchGenres();
    console.log(genres);
  }, [])


  return (
    <div>
      <Layout>
        <Form onChangeQuery={(e) => onChangeQuery(e)}
              queries={queries}
         />
         <Button fetchMovies={() => fetchMovies()} text='Find a movies' />
         <MoviesGrid movies={movies} genres={genres} />
      </Layout>
    </div>
    );
}

export default App;
