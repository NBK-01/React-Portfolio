import React from 'react'
import MobileNav from '../components/mobileNav';
import NavBar from '../components/Navbar';
import AboutView from '../components/aboutView';

const about = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>

        <MobileNav isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle}/>
        <AboutView/>

        </>
    )
}

export default about
