import styled from 'styled-components'

export const MainContainer = styled.div`
background:  #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0px 30px;
height: 800px;
position relative;
z-index: 1;
`


export const MainBg = styled.div`
background: transparent;
position: absolute;
top:5%;
bottom:0;
right:0;
left: 0;
width: 100%;
height: 100%;
border-radius: 30px;
`

export const MainIntro = styled.h1`
position: absolute;
top: 20%;
bottom: 0;
left: 10%;
right: 0;
width: 60%;
font-size: 3rem;
color: #fefefe;
`;

export const MainBtn = styled.a`
position: absolute;
top: 40%;
bottom: 0;
left: 10%;
right: 0;
font-size: 1.5rem;
background: linear-gradient(to left bottom, #00ff2c, #00fe7e, #00fab3, #00f4d7, #12ebeb);
-webkit-background-clip: text;  
-webkit-text-fill-color: transparent;
`


// background: linear-gradient(to left bottom, #00ff2c, #00fe7e, #00fab3, #00f4d7, #12ebeb);
// -webkit-background-clip: text;  
// -webkit-text-fill-color: transparent;