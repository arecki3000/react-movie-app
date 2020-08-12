import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin: 5vh auto;
    width: 80%;
    // height: 30vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    // align-items: center;
    
`
const RadioButton = styled.input`
    display: none; 
    color: red;
`
const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vh;
`
const RadioLabel = styled.label`
    text-decoration:  ${props => props.choice === props.id ? 'line-through' : ''};
    font-weight: 100;
`

const Form = (props) => {
    
    const { queries, onChangeQuery} = props;

    return(
        <div>
            <FormContainer>
                <RadioContainer onChange={onChangeQuery}>Have you seen it?
                        <RadioLabel id='popularity.desc' choice={queries.popularity} >
                            <RadioButton type='radio' value='popularity.desc' name='popularity' /> Probably...
                        </RadioLabel>
                        <RadioLabel id='popularity.asc' choice={queries.popularity} >
                            <RadioButton type='radio' value='popularity.asc' name='popularity' /> Give me something new.
                        </RadioLabel>
                </RadioContainer>
                <RadioContainer onChange={onChangeQuery}>How old is it?
                        <RadioLabel id='1960' choice={queries.year} >
                            <RadioButton type='radio' value='1960' name='year' /> Ancient.
                        </RadioLabel>
                        <RadioLabel id='1980' choice={queries.year} >
                            <RadioButton type='radio' value='1980' name='year' /> Classic.
                        </RadioLabel>
                        <RadioLabel id='2000' choice={queries.year} >
                            <RadioButton type='radio' value='2000' name='year' /> Fairly new.
                        </RadioLabel>
                        <RadioLabel id='2020' choice={queries.year} >
                            <RadioButton type='radio' value='2020' name='year' /> Brand new.
                        </RadioLabel>
                </RadioContainer>
                <RadioContainer onChange={onChangeQuery}>How bad is it?
                        <RadioLabel id='4' choice={queries.score} >
                            <RadioButton type='radio' value='4' name='score' /> So bad it's actualy good.
                        </RadioLabel>
                        <RadioLabel id='7' choice={queries.score} >
                            <RadioButton type='radio' value='7' name='score' /> May be bad.
                        </RadioLabel>
                        <RadioLabel id='10' choice={queries.score} >
                            <RadioButton type='radio' value='10' name='score' /> Should be good.
                        </RadioLabel>
                </RadioContainer>
                <RadioContainer onChange={onChangeQuery}>What it should be about?
                        <RadioLabel id='14' choice={queries.genre} >
                            <RadioButton type='radio' value='14' name='genre' /> Adventure.
                        </RadioLabel>
                        <RadioLabel id='878' choice={queries.genre} >
                            <RadioButton type='radio' value='878' name='genre' /> Space.
                        </RadioLabel>
                        <RadioLabel id='35' choice={queries.genre} >
                            <RadioButton type='radio' value='35' name='genre' /> Something funny.
                        </RadioLabel>
                        <RadioLabel id='27' choice={queries.genre} >
                            <RadioButton type='radio' value='27' name='genre' /> Scary.
                        </RadioLabel>
                        <RadioLabel id='10749' choice={queries.genre} >
                            <RadioButton type='radio' value='10749' name='genre' /> Romance.
                        </RadioLabel>
                        <RadioLabel id='16' choice={queries.genre} >
                            <RadioButton type='radio' value='16' name='genre' /> Animation.
                        </RadioLabel>
                        <RadioLabel id='' choice={queries.genre} >
                            <RadioButton type='radio' value='' name='genre' /> Whatever.
                        </RadioLabel>
                </RadioContainer>
                {/* <RadioContainer onChange={onChangeQuery}> Animated?
                        <RadioLabel id='animated' choice={queries.animated} >
                            <RadioButton type='radio' value='animated' name='animated' /> Yes
                        </RadioLabel>
                        <RadioLabel id='not animated' choice={queries.animated} >
                            <RadioButton type='radio' value='not animated' name='animated' /> No
                        </RadioLabel>
                        <RadioLabel id='' choice={queries.animated} >
                            <RadioButton type='radio' value='' name='animated' /> Whatever
                        </RadioLabel>
                </RadioContainer>
                <RadioContainer onChange={onChangeQuery}>May it be seroius?
                        <RadioLabel id='drama' choice={queries.drama} >
                            <RadioButton type='radio' value='drama' name='drama' /> Yes
                        </RadioLabel>
                        <RadioLabel id='not drama' choice={queries.drama} >
                            <RadioButton type='radio' value='not drama' name='drama' /> No
                        </RadioLabel>
                        <RadioLabel id='' choice={queries.drama} >
                            <RadioButton type='radio' value='' name='drama' /> Whatever
                        </RadioLabel>
                </RadioContainer> */}
            </FormContainer>
        </div>
    )
}

export default Form;