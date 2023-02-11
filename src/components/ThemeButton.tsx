import React, { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { lightTheme, darkTheme } from '../contexts/Themes'
import './styles.css'
import ThemeButtonIcon from './ThemeButtonIcon';

const ThemeButton: React.FC = () => {

    const { theme, setTheme } = useTheme();
    const toggleTheme = (e: React.MouseEvent) => {
        e.preventDefault();
        theme.name === 'light' ? setTheme(darkTheme) : setTheme(lightTheme)
        localStorage.setItem('theme', JSON.stringify(theme.name === 'light' ? darkTheme : lightTheme));
    }
    return (
        <span 
            className="menu"
            onClick={(e) => toggleTheme(e)}
        >
            <ThemeButtonIcon />
        </span>
    )
}

export default ThemeButton;
