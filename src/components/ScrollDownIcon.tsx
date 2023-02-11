import React from 'react'
import LightCaretDoubleDown from '../icons/LightCaretDoubleDown.svg';
import DarkCaretDoubleDown from '../icons/DarkCaretDoubleDown.svg';
import { useTheme } from '../contexts/ThemeContext';

const ScrollDownIcon = () => {

    const { theme, setTheme } = useTheme();

    if (theme.name==='light') {
        return (
            <div>
                <LightCaretDoubleDown />
            </div>
        )
    }
    return (
        <div>
            <DarkCaretDoubleDown />
        </div>
    )
}

export default ScrollDownIcon
