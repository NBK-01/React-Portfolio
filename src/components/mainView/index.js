import React from 'react';
import {MainContainer, MainBg, MainIntro, MainSub, MainLinks} from './mainEl';


const Main = () => {
    return (
        <MainContainer>
            <MainBg>
                <MainIntro> I'm Nayef. Web Development. Design. Planning. </MainIntro>
                <MainSub> 
                    <MainLinks> Let's Talk </MainLinks>
                    <MainLinks> Github </MainLinks>
                    <MainLinks> LinkedIn </MainLinks>
                    <MainLinks> Twitter </MainLinks>
                </MainSub>
            </MainBg>
        </MainContainer>
    )
}



export default Main
