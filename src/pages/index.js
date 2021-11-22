import React, {useState} from 'react';
import MobileNav from '../components/mobileNav';
import NavBar from '../components/Navbar';
import Main from '../components/mainView';
import About from '../components/aboutView';
import { aboutObjOne } from '../components/aboutView/data';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
    <MobileNav isOpen={isOpen} toggle={toggle} />
    <NavBar toggle={toggle}/>
    <Main/>
    <About {...aboutObjOne}/>
        </>
    )
}




export default Home
