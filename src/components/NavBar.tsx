import React from 'react'
import ThemeButton from './ThemeButton';
import { useTheme } from '../contexts/ThemeContext';
import './styles.css';
import DropDownMenu from './DropDownMenu';

const NavBar = () => {
    const { theme, setTheme } = useTheme();

    return (
        <nav className='NavBar'
            style={{borderColor: theme.font}}>


            <ul>
                <li className='theme_button'><ThemeButton /></li>
                <li><p>welcome!</p></li>
            </ul>

            <DropDownMenu />
        </nav>
    )
}

export default NavBar
