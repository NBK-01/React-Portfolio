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
top: 10%;
bottom: 0;
right: 0;
left: 13%;
font-size: 4rem;
margin-left: 20px;
background: linear-gradient(to left bottom, #00ff2c, #00fe7e, #00fab3, #00f4d7, #12ebeb);
-webkit-background-clip: text;  
-webkit-text-fill-color: transparent;
`;

export const MainSub = styled.ul`
position: absolute;
top: 30%;
left: 14%;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 70%;
list-style: none;

@media screen and (max-width: 768px){
  top: 50%;
}
}
`

export const MainLinks = styled.li`
font-size: 1.5rem;
background: linear-gradient(to left bottom, #00ff2c, #00fe7e, #00fab3, #00f4d7, #12ebeb);
-webkit-background-clip: text;  
-webkit-text-fill-color: transparent;
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover{
  border-bottom: 2px solid  #00fab3;
  transform: scale(1.2);
}


`


/* @media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
} */