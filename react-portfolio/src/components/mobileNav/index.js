import React from 'react';
import {mobileNav, Icon, closeIcon} from './mobileEl';

const mobileNav = () => {
    return (
        <mobileNav>
           <Icon>
            <closeIcon />   
            </Icon> 
            <mobileNavWrapper>
                <mobileItems>
                    <mobileLinks to="222"> 1 </mobileLinks>
                    <mobileLinks to="222"> 1 </mobileLinks>
                    <mobileLinks to="222"> 1 </mobileLinks>
                </mobileItems>
            </mobileNavWrapper>
        </mobileNav>
    )
}

export default mobileNav
