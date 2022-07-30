import React, { useState } from 'react'
import { MdOutlineDarkMode } from 'react-icons/md';




const LightDarkMode = () => {

    // true == light, false == dark
    const [lightDarkMode, setlightDarkMode] = useState<boolean>(true);

    // change light/dark mode
    const handleClick = ((e: React.MouseEvent) => {
        // If light, set to dark
        if(lightDarkMode) {
            setlightDarkMode(false);
        }
        // if dark, set to light
        else{
            setlightDarkMode(true);
        }
    });

    return (
        <span 
            className="lightdarkmode"
            onClick={(e) => handleClick(e)}>
            
        <MdOutlineDarkMode />
        </span>
    )
}

export default LightDarkMode
