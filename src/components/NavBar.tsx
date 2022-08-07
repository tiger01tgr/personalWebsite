import React from 'react'
import ThemeButton from './ThemeButton';
import { useTheme } from '../contexts/ThemeContext';
import './styles.css';
import { DropDownMenu, DropDownMenuObject } from './DropDownMenu';

const NavBar = () => {
    const { theme, setTheme } = useTheme();

    return (
        <nav className='NavBar'
            style={{borderColor: theme.font}}>


            <ul>
                <li className='theme_button'><ThemeButton /></li>
            </ul>

            <DropDownMenu>
                <DropDownMenuObject/>
            </DropDownMenu>
        </nav>
    )
}

export default NavBar
