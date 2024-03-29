import React, { PropsWithChildren, PropsWithRef, Ref, useRef, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext';
import { useMenu } from '../contexts/DropDownMenuContext';
import Menu from '../icons/Menu.svg';
import DarkMenu from '../icons/DarkMenu.svg';
import pdf from '../resume.pdf';
import './styles.css'

export const DropDownMenu: React.FC<React.PropsWithChildren> = (props) => {
    
    const { theme, setTheme } = useTheme();
    const { menu, setMenu } = useMenu();
    console.log(menu);

    const toggleMenu = (e: React.MouseEvent) => {
        setMenu({on: !menu.on});
    }
    if (theme.name==='dark') {
        return (
            <span className='menu' onClick={(e) => toggleMenu(e)}>
                    <DarkMenu />
                    {menu.on && props.children}
            </span>
        )
    }
    else {
        return (
            <span className='menu' onClick={(e) => toggleMenu(e)}>
                    <Menu />
                    {menu.on && props.children}
            </span>
        )
    }
}

interface Props {
    children: React.ReactNode;
    id: string;
}

export const DropDownMenuObject = () => {

    const { theme, setTheme} = useTheme();
    const DropDownMenuObjectItem: React.FC<Props> = (props) => {

        const scrollTo = (e: React.MouseEvent) => {
            e.preventDefault();
            if (props.id==='resume') return;
            const anchor = document.getElementById(props.id);
            if (!anchor) return;
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }

        if (props.id==='resume') {
            return (
                <a 
                    className='menu-item' 
                    style={{color: theme.font, textDecorationColor: theme.font}}
                    href={pdf}
                    download='resume.pdf'
                >
                    {props.children}
                </a>
            )
        }
        else{
            return (
                <a 
                    className='menu-item' 
                    style={{color: theme.font, textDecorationColor: theme.font}}
                    onClick={(e) => scrollTo(e)}
                >
                    {props.children}
                </a>
            )
        }
    }
    return (
        <div className='menuobj' style={{borderColor: theme.font, backgroundColor: theme.background, textDecorationColor: theme.font}}>
            <DropDownMenuObjectItem id='aboutme'>about me</DropDownMenuObjectItem>
            <DropDownMenuObjectItem id='experience'>experience</DropDownMenuObjectItem>
            <DropDownMenuObjectItem id='projects'>projects</DropDownMenuObjectItem>
            <DropDownMenuObjectItem id='contactme'>contact me</DropDownMenuObjectItem>
            <DropDownMenuObjectItem id='resume'>resume</DropDownMenuObjectItem>
        </div>
    )
}
