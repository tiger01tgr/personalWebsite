import React, { useRef, useState } from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import Page from './components/Page';
import NavBar from './components/NavBar';
import { RightBar } from './components/RightBar';
import { MenuProvider } from './contexts/DropDownMenuContext';
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
                <h2 className='scrollDownText'>scroll down</h2>
                <div className='bottom-scroll'>
                  <ScrollDownIcon/>
                </div>
            </div>
          </Page>

          <Page id='aboutme'>
            <h1>&#60;about me&#62;</h1>
            <div className='aboutme'>
              <span className="aboutmedescription">
                <p>I'm a CS major at Vanderbilt University. I'm passionate about fullstack development, software architecture, and financial engineering. </p>
                <p>Right now, I'm enjoying learning C and experimenting with Rust.</p>
              </span>
              <div className='aboutmepicdiv'>
                <img src={pic} className='aboutmepic'></img>
            {/*    <p id='aboutmepicdescription' style={{fontStyle: "italic"}}>what i look like</p> 
                <p id='aboutmepicdescription' style={{fontStyle: "italic", fontSize: 14}}>circa 2021, colorized</p>*/}
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
              <ExperienceProjectsDetails 
                title='Credit Do - Product Manager'
                date='Oct 2022 - Present'
                techUsed='Agile, Typescript, React.js, Next.js'
                bullet1=' - Leading team to deliver on a digital solution for non-profit Credit Do.'
                bullet2=' - Managing bi-weekly sprints using Agile methodology.'
                bullet3=' - Building fully scalable system to meet stakeholder requirements in React, Next, Google Firebase.'/>
              <ExperienceProjectsDetails 
                title='Vanderbilt University - Teaching Assistant'
                date='Aug 2022 - Present'
                techUsed='C++'
                bullet1=' - Hold office hours twice a week.'
                bullet2=' - Contribute test-cases to our C++ testing script.'
                bullet3=''/>
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
                  title='Cerebrum'
                  date='Dec 2022 - Present'
                  techUsed=' Typescript, React.js, Next.js, Google Firebase '
                  bullet1=' - Built fully scalable headache tracking web app.'
                  bullet2=" - Designed to record accurate medical information for migraines and cluster headaches"
                  bullet3=' - Creates detailed report of all past headaches'/>
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
