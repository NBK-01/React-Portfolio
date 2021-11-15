import React, {useState} from 'react';
import MobileNav from '../components/mobileNav';
import NavBar from '../components/Navbar';
import Main from '../components/mainView';



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
        </>
    )
}




export default Home
