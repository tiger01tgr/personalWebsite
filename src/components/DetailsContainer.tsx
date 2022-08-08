import React, { PropsWithChildren } from 'react'
import './DetailsContainer.css'

const DetailsContainer: React.FC<PropsWithChildren> = (props) => {
    return (
        <div className='DetailsContainer'>
            {props.children}
        </div>
    )
}

export default DetailsContainer
