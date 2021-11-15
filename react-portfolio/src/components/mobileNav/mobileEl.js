import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';


export const mobileNav = style.aside`
position:fixed;
z-index: 999;
width: 100%;
background: #000;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`


export const closeIcon = style(FaTimes)`
color: #fff;

`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
