import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';


const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 60px 30px 30px 30px;
`


const MoviesGrid = ({ movies, genres }) => {


    return(
        <Grid>
            {movies && movies.map(movie => <Movie key={movie.id} movie={movie} genres={genres} />)}
        </Grid>
    )
}

export default MoviesGrid