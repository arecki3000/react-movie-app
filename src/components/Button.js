import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    text-align: center;
`

const StyledButton = styled.button`
    height: 2rem;
    width: 8rem;
    border: 1px solid #efb6b2;
    color: #efb6b2;
    background: #fafafa;
    border-radius: .3rem; 
`

const Button = ({ fetchMovies, text }) => {

    return(
        <ButtonContainer>
            <StyledButton onClick={fetchMovies} >{text}</StyledButton>
        </ButtonContainer>
    )
}

export default Button;