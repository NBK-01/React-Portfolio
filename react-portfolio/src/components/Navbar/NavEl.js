import styled from 'styled-components'
import { Link } from 'react-scroll'



export const Nav = styled.nav `

background: #fff;
height: 75%;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
position: sticky;
top: 0;
z-index: 10


@media screen and (max-width: 960px){
    transition: 1s all ease;
}
`


export const NavbarWrapper = styled.div`

display:flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`


export const NavLogo = styled(LinkS)