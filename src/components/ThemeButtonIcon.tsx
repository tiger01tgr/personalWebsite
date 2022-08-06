import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { ReactComponent as Moon } from '../icons/Moon.svg'
import { ReactComponent as Sun } from '../icons/Sun.svg'


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
