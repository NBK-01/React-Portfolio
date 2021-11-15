import React from 'react';
import Image from '../../images/Image.png';
import {MainContainer, MainBg, MainImg} from './mainEl';


const Main = () => {
    return (
        <MainContainer>
            <MainBg>
                <MainImg type="image/png" src={Image}/>
            </MainBg>
        </MainContainer>
    )
}



export default Main
