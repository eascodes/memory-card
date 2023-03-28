import React from 'react'
import '../styles/Header.css'

const Header = (props) => {
    const { score, bestScore } = props

    return(
        <div className='header'>
            <h1>MEMORY FETCH</h1>
            <p className='description'>Get points by clicking a dog image, but don't click on any more than once!</p>
            <div className='scoreboard'>
                <h4>Score:</h4>
                <p>{score}</p>
                <h4>Best Score:</h4>
                <p>{bestScore}</p>
            </div>
        </div>
    )
}

export default Header