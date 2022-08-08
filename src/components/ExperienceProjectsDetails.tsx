import React from 'react'
import './ExperienceProjectsDetail.css'

interface Props {
    title: string;
    date: string;
    techUsed: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
}

const ExperienceProjectsDetails: React.FC<Props> = (props) => {
    return (
        <div className='detailDiv'>
            <div className="detailHeader">
                <span className="headerChild">
                    <h1 className='title'>{props.title}</h1>
                </span>
                <span className="headerChild">
                    <h3>{props.date}</h3>
                </span>
            </div>
            <div className="detailBody">
                <p 
                    className="techUsed" 
                    style={{fontWeight: 500}}>{props.techUsed}</p>
                <ul>
                    <li className='bullet'>{props.bullet1}</li>
                    <br />
                    <li className='bullet'>{props.bullet2}</li>
                    <br />
                    <li className='bullet'>{props.bullet3}</li>
                </ul>
            </div>
        </div>
    )
}

export default ExperienceProjectsDetails
