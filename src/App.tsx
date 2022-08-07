import React, { useRef, useState } from 'react';
import './App.css';
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'
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
                text={'welcome!'}
                fontSize={30}
                delay={200}
                id={'welcomeText'}
              />
              <TypingText 
                text={'hi i\'m'}
                fontSize={30}
                delay={1500}
                id={'hiText'}
              />
              <TypingText 
                text={'Tiger Li'}
                fontSize={54}
                delay={3000}
                id={'tigerText'}
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
                <p>hzxck hdufh sodf a hofah sodfhash fasjdfha jdshf adkjfa. lksdfa hdsjfh asdhf ladf jkahd sjfas d hkf lahjsdfla sdh fahs kdfa.</p>
                <p>askdfj aksdf;la aksdlfaj ajf adf afa a adflkadfkls. adfadf.</p>
              </span>
              <div className='aboutmepicdiv'>
                <img src={pic} className='aboutmepic'></img>
                <p id='aboutmepicdescription'>askdfj aksdf;la aksdlfaj ajf adf afa a adflkadfkls. adfadf.</p>
              </div>
            </div>
            <h1>&#60;/about me&#62;</h1>
            <div className='bottom-scroll'>
              <ScrollDownIcon/>
            </div>
          </Page>
          <Page id='experience'>
          <h1>&#60;experience&#62;</h1>
            <div className='aboutme'>
              <span className="aboutmedescription">
                <p>hzxck hdufh sodf a hofah sodfhash fasjdfha jdshf adkjfa. lksdfa hdsjfh asdhf ladf jkahd sjfas d hkf lahjsdfla sdh fahs kdfa.</p>
                <p>askdfj aksdf;la aksdlfaj ajf adf afa a adflkadfkls. adfadf.</p>
              </span>
            </div>
            <h1>&#60;/experience&#62;</h1>
            <div className='bottom-scroll'>
              <ScrollDownIcon/>
            </div>
          </Page>
          <Page id='projects'>
            <h1>&#60;projects&#62;</h1>
              <div className='aboutme'>
                <span className="aboutmedescription">
                  <p>hzxck hdufh sodf a hofah sodfhash fasjdfha jdshf adkjfa. lksdfa hdsjfh asdhf ladf jkahd sjfas d hkf lahjsdfla sdh fahs kdfa.</p>
                  <p>askdfj aksdf;la aksdlfaj ajf adf afa a adflkadfkls. adfadf.</p>
                </span>
              </div>
              <h1>&#60;/projects&#62;</h1>
              <div className='bottom-scroll'>
                <ScrollDownIcon/>
              </div>
          </Page>
          <Page id='contactme'>
            <h1>&#60;contact me&#62;</h1>
              <div className='aboutme'>
                <span className="aboutmedescription">
                  <p>hzxck hdufh sodf a hofah sodfhash fasjdfha jdshf adkjfa. lksdfa hdsjfh asdhf ladf jkahd sjfas d hkf lahjsdfla sdh fahs kdfa.</p>
                  <p>askdfj aksdf;la aksdlfaj ajf adf afa a adflkadfkls. adfadf.</p>
                </span>
              </div>
              <h1>&#60;/contact me&#62;</h1>
          </Page>
        </div>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
