import React from 'react'

const Card = (props) => {
    const { location, alt, className, handleClick } = props

    return(
        <div className='card'>
            <img src={location} alt={alt} className={className} onClick={handleClick}></img>
        </div>
    )
}

export default Card

