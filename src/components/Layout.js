import React from 'react';
import styled from 'styled-components'

const Body = styled.div`
    background: #fafafa;
    height: 100%;
    width: auto;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    letter-spacing: 0.2rem;
    font-weight: 100;
    border-bottom: 1px solid black;
`
const Logo = styled.div`
    width: 40%;
    text-align: center;
    color: #efb6b2;
    font-size: 1.7rem;
    letter-spacing: 1rem;
    margin: 1.5rem -1rem 1rem 0;
    font-weight: 400;
`
const lineThrough = {
    textDecoration: 'line-through',
}
const Layout = (props) => {
    return (
            <Body>
                <Header>
                    <Logo>WHATEVER</Logo>
                    <div>Find a perfect movie when you <span style={lineThrough}>don't</span> know what you want.</div>
                </Header>
                {props.children}
                {/* <Footer></Footer> */}
            </Body>   
    )
};

export default Layout;