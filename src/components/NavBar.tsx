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
            <ThemeButton />

            <DropDownMenu>
                <DropDownMenuObject/>
            </DropDownMenu>
        </nav>
    )
}

export default NavBar
