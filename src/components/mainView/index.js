import React from 'react';
import {MainContainer, MainBg, MainIntro, MainBtn} from './mainEl';
import ParticleBackground from '../../ParticleBg'


const Main = () => {
    return (
        <MainContainer>
            <MainBg>
            <ParticleBackground>
            </ParticleBackground>
                <MainIntro> Devlopment Agency, Lorem ipsum dolor sit amet, consectetur adip</MainIntro>
                <MainBtn> Explore </MainBtn>
            </MainBg>
        </MainContainer>
    )
}



export default Main
