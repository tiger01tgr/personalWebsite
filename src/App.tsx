import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'
import ThemeButton from './components/ThemeButton'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import FrontPage from './components/FrontPage';
import NavBar from './components/NavBar';
import { RightBar } from './components/RightBar';


const App: React.FC = () => {

  return (
    <ThemeProvider >
      <FrontPage>
        <NavBar />
        <RightBar />
      </FrontPage>
    </ThemeProvider>
  );
}

export default App;
