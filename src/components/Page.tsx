import React, { RefObject } from 'react'
import { useTheme } from '../contexts/ThemeContext';
import { useMenu } from '../contexts/DropDownMenuContext';

interface Props {
    children: React.ReactNode[] | React.ReactNode;
    id: string;

}

const Page: React.FC<Props> = ({children, id}) => {


    const { theme, setTheme } = useTheme();
    const { menu, setMenu } = useMenu();
    const toggleMenu = (e: React.MouseEvent) => {
        if (!menu.on) return;
        setMenu({on: false});
    }
    return (
        <div 
            id={id}
            className='Page'
            style={{backgroundColor: theme.background, color: theme.font}}
            onClick={(e) => toggleMenu(e)}
        >
            {children}
        </div>
    )
}

export default Page
