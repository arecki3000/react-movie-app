import React from 'react';
import styled from 'styled-components';
import placeholder from '../img/movie-placeholder.png'


const MovieContainer = styled.div`
    width: calc( 100% / 4 - 30px );
    padding-bottom: 30px;
    margin: 15px;
`
const Overview = styled.div`
    font-size: small;
`
const Genres = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Genre = styled.span`
    font-weigth: 100;
    padding: 0 .5rem 0 0;
    font-size: small;
    letter-spacing: .03rem;
    text-decoration: underline;
`

const Movie = ({ movie, genres }) => {
    
    const poster = movie.backdrop_path === null ? placeholder : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

    return(
        <MovieContainer>
            <img width='100%' height='200' src={poster} alt={`${movie.title} poster`} />
            <Genres>{movie.genre_ids.map((id) => <span>{genres.genres.map(genre => {
                if (genre.id === id) {
                    return  <Genre>{genre.name}</Genre>
                }
            })}</span>)}</Genres>
            <div><strong>{movie.title}</strong>, {movie.release_date.slice(0,4)}</div>
            <Overview>{movie.overview}</Overview>
        </MovieContainer>
    )
}


export default Movie;