import React from 'react'
import { ReactComponent as GithubLogo } from '../icons/GithubLogo.svg';
import { ReactComponent as LinkedinLogo } from '../icons/LinkedinLogo.svg';
import './styles.css'


export const RightBar = () => {
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
