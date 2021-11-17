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
left: 0;
width: 100%;
height: 100%;
border-radius: 10px;
`

export const MainIntro = styled.h1`
position: absolute;
top: 20%;
bottom: 0;
right: 0;
left: 20%;
font-size: 4.5rem;
margin-left: 20px;
background: linear-gradient(to left bottom, #00ff2c, #00fe7e, #00fab3, #00f4d7, #12ebeb);
-webkit-background-clip: text;  
-webkit-text-fill-color: transparent;
`




/* @media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
} */