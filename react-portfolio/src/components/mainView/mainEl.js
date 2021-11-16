import styled from 'styled-components'

export const MainContainer = styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0px 30px;
height: 800px;
position relative;
z-index: 1;
`


export const MainBg = styled.div`
background: #0c0c0c;
position: absolute;
top:5%;
bottom:0;
right:0;
left: 10%;
width: 80%;
height: 100%;
border-radius: 20px;
`

export const MainIntro = styled.h1`
position: absolute;
top: 30%;
bottom: 0;
right: 0;
left: 0;
font-size: 3.5rem;

`


/* @media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
} */