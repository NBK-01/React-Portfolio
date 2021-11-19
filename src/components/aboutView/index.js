import React from 'react'
import {AboutContainer, AboutWrapper, AboutRow, ColumnOne, ColumnTwo, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './aboutEl'

const AboutView = () => {
    return (
        <AboutContainer>
            <AboutWrapper>
                <AboutRow>
                    <ColumnOne>
                    <TextWrapper>
                        <TopLine>TopLINE</TopLine>
                        <Heading> Head </Heading>
                        <Subtitle> SUBtitle </Subtitle>
                    </TextWrapper>
                    </ColumnOne>
                    <ColumnTwo>
                        <ImgWrapper>
                            <Img/>
                        </ImgWrapper>
                    </ColumnTwo>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutView
