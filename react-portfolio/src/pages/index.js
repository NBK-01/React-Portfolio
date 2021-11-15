import React, {useState} from 'react';
import MobileNav from '../components/mobileNav';
import NavBar from '../components/Navbar';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
    <MobileNav isOpen={isOpen} toggle={toggle} />
    <NavBar toggle={toggle}/>
        </>
    )
}

export default Home
