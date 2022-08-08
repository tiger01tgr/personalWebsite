import React, { useRef, useState } from 'react';
import './App.css';
import ThemeButton from './components/ThemeButton'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import Page from './components/Page';
import NavBar from './components/NavBar';
import { RightBar } from './components/RightBar';
import { MenuProvider } from './contexts/DropDownMenuContext';
import { BsChevronDoubleDown } from 'react-icons/bs';
import pic from './icons/pic.jpg';
import ScrollDownIcon from './components/ScrollDownIcon';
import TypingText from './components/TypingText';
import ExperienceProjectsDetails from './components/ExperienceProjectsDetails';
import DetailsContainer from './components/DetailsContainer';
import EmailSubmit from './components/EmailSubmit';


const App: React.FC = () => {

  return (
    <ThemeProvider >
      <MenuProvider>
        <div className="website">
          <NavBar />
          <RightBar />
          <Page id='frontpage'>
            <div id='name'>
              <TypingText 
                text={'hi i\'m'}
                fontSize={30}
                delay={200}
                id={'hiText'}
              />
              <TypingText 
                text={'Tiger Li'}
                fontSize={54}
                delay={1000}
                id={'tigerText'}
              />
              <TypingText 
                text={'welcome to my website! :)'}
                fontSize={30}
                delay={2000}
                id={'welcomeText'}
              />
            </div>
            <div id='name' className='frontPageScroll'>
                <TypingText 
                    text={'scroll down'}
                    fontSize={30}
                    delay={5000}
                    id={'scrollDownText'}
                  />
                <div className='bottom-scroll'>
                  <ScrollDownIcon/>
                </div>
            </div>
          </Page>

          <Page id='aboutme'>
            <h1>&#60;about me&#62;</h1>
            <div className='aboutme'>
              <span className="aboutmedescription">
                <p>I'm a CS major at Vanderbilt University. I'm passionate about both frontend and backend development, cloud computing, and software architecture. </p>
                <p>In my free time, I like to follow soccer and write/play music.</p>
              </span>
              <div className='aboutmepicdiv'>
                <img src={pic} className='aboutmepic'></img>
                  <p id='aboutmepicdescription' style={{fontStyle: "italic"}}>what i look like</p>
                  <p id='aboutmepicdescription' style={{fontStyle: "italic", fontSize: 14}}>circa 2021, colorized</p>
              </div>
            </div>
            <h1>&#60;/about me&#62;</h1>
            <div className='bottom-scroll'>
              <ScrollDownIcon/>
            </div>
          </Page>
          <Page id='experience'>
            <h1>&#60;experience&#62;</h1>
            <DetailsContainer>
              <ExperienceProjectsDetails 
                title='JetDevs - Software Developer Intern'
                date='May 2022 - July 2022'
                techUsed='Typescript, React.js, REST APIs, Docker, AWS'
                bullet1=' - Designed and built scalable containerized micro-services that interact with blockchains to bring the company into the web3 space.'
                bullet2=' - Converted company’s website to react responsively to all mobile and tablet screen size.'
                bullet3=' - Sustained over 250 customer’s interest by integrating Twilio communications API into company operations.'/>
            </DetailsContainer>
            <h1>&#60;/experience&#62;</h1>
            <div className='bottom-scroll'>
              <ScrollDownIcon/>
            </div>
          </Page>

          <Page id='projects'>
            <h1>&#60;projects&#62;</h1>
            <DetailsContainer>
              <ExperienceProjectsDetails 
                  title='Personal Website'
                  date='August 2022'
                  techUsed='Typescript, React.js, HTML5, CSS'
                  bullet1=" - You're on this website right now!"
                  bullet2=' - Created responsive mobile design.'
                  bullet3=''/>
              <ExperienceProjectsDetails 
                  title='Vandy Course Buddy (hackathon)'
                  date='October 2021'
                  techUsed='Node.js'
                  bullet1=' - Created back-end for Vandy Course Buddy in Node.js.'
                  bullet2=' - Led project to completion within time pressure of 48 hours.'
                  bullet3=''/>
              <ExperienceProjectsDetails 
                  title='Discord Poll Bot'
                  date='March 2021'
                  techUsed='Python'
                  bullet1=' - Developed a bot using Discord’s API.'
                  bullet2=''
                  bullet3=''/>
            </DetailsContainer>
            <h1>&#60;/projects&#62;</h1>
            <div className='bottom-scroll'>
              <ScrollDownIcon/>
            </div>
          </Page>

          <Page id='contactme'>
            <h1>&#60;contact me&#62;</h1>
            <EmailSubmit />
            <h1>&#60;/contact me&#62;</h1>
          </Page>
        </div>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
