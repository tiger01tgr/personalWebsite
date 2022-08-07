import React from 'react'
import { useTheme } from '../contexts/ThemeContext';
import { ReactComponent as GithubLogo } from '../icons/GithubLogo.svg';
import { ReactComponent as LinkedinLogo } from '../icons/LinkedinLogo.svg';
import { ReactComponent as DarkGithubLogo } from '../icons/DarkGithubLogo.svg';
import { ReactComponent as DarkLinkedinLogo } from '../icons/DarkLinkedinLogo.svg';
import './styles.css'


export const RightBar = () => {
    const { theme, setTheme } = useTheme();

    if (theme.name==='light') {
        return (
            <div className='rightbar'>
                <ul className='rightbar'>
                    <li className='rightbaritem'>
                        <a href='https://github.com/tiger01tgr/' target='_blank'>
                            <GithubLogo />
                        </a>
                    </li>

                    <li className='rightbaritem'>
                        <a href='https://www.linkedin.com/in/tiger-li-0492a71b9/' target='_blank'>
                            <LinkedinLogo />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
    return (
        <div className='rightbar'>
            <ul className='rightbar'>
                <li className='rightbaritem'>
                    <a href='https://github.com/tiger01tgr/' target='_blank'>
                        <DarkGithubLogo />
                    </a>
                </li>

                <li className='rightbaritem'>
                    <a href='https://www.linkedin.com/in/tiger-li-0492a71b9/' target='_blank'>
                        <DarkLinkedinLogo />
                    </a>
                </li>
            </ul>
        </div>
    );
}
