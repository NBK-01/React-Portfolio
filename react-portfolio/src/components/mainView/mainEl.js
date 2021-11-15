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
position: absolute;
top:5%;
bottom:0;
right:0;
left: 5%;
width: 90%;
height: 100%;
border: 3px dashed black;
`

export const MainImg = styled.img`
position: absolute;
top:0;
bottom:0;
right:0;
left: 35%;
width: 550px;
height: 550px;
`


/* @media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
} */