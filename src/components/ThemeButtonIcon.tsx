import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import Moon from '../icons/Moon.svg'
import Sun from '../icons/Sun.svg'


const ThemeButtonIcon = () => {
    const { theme, setTheme } = useTheme();
    if (theme.name === 'light'){
        return (
            <div>
                <Moon />
            </div>
        )
    }
    else {
        return (
            <div>
                <Sun />
            </div>
        )
    }
}

export default ThemeButtonIcon
