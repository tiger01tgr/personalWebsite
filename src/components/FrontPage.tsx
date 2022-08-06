import React from 'react'
import { useTheme } from '../contexts/ThemeContext';
import { BsChevronDoubleDown } from 'react-icons/bs';


interface Props {
    children: React.ReactNode[] | React.ReactNode;
}

const FrontPage: React.FC<Props> = ({children}) => {
    const { theme, setTheme } = useTheme();
    console.log(theme);
    
    return (
        <div 
            className='FrontPage'
            style={{backgroundColor: theme.background, color: theme.font}}
        >
            {children}
            <div id='name'>
                <h2>hi, i'm</h2>
                <h1>Tiger Li</h1>
            </div>
            <div id='name'>
                <h3>scroll down</h3>
                <BsChevronDoubleDown />
            </div>
        </div>
    )
}

export default FrontPage
