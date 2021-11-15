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

export const MainImg = styled.div`
    position:absolute;
    z-index:-1;
    width:100%;
    height:100%;
`


