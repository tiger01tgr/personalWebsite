import React from 'react'
import './EmailSubmit.css'
import { useTheme } from '../contexts/ThemeContext'
const EmailSubmit = () => {

    const { theme, setTheme } = useTheme();

    return (
        <form
            action="https://formspree.io/f/mvoypekl"
            method="POST"
            className='emailForm'
        >  
            <div className='emailHeader'>
                <label className='contactme'>
                    <p id='toFromSubject'>to: </p>
                    <input 
                        className='emailInput' 
                        style={{backgroundColor: theme.background, color: theme.font, border: 'none'}} 
                        value='tiger01tgr@gmail.com'
                        readOnly
                    />

                </label>
                <label className='contactme'>
                    <p id='toFromSubject'>from: </p>
                    <input 
                        className='emailInput' 
                        type="email" 
                        name="email" 
                        style={{backgroundColor: theme.background, borderColor: theme.font, color: theme.font}}
                        required
                    />
                </label>
                <label className='contactme'>
                    <p id='toFromSubject'>subject: </p>    
                    <input className='emailInput' name="subject" style={{backgroundColor: theme.background, borderColor: theme.font, color: theme.font}}/>
                </label>
            </div>
            <label className='contactme'>
                <textarea 
                    className='emailBody' 
                    name="message" 
                    style={{backgroundColor: theme.background, borderColor: theme.font, color: theme.font}}
                    required
                >
                </textarea>
            </label>
            <button 
                className='submit' 
                type="submit"
                style={{backgroundColor: theme.background, borderColor: theme.font, color: theme.font}}>
                    submit
            </button>
        </form>
    )
}

export default EmailSubmit
