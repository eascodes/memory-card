import React, { useState } from 'react'
import '../styles/Container.css'
import Card from './Card'
import dog1 from '../assets/dog1.jpg'
import dog2 from '../assets/dog2.jpg'
import dog3 from '../assets/dog3.jpg'
import dog4 from '../assets/dog4.jpg'
import dog5 from '../assets/dog5.jpg'
import dog6 from '../assets/dog6.jpg'
import dog7 from '../assets/dog7.jpg'
import dog8 from '../assets/dog8.jpg'
import dog9 from '../assets/dog9.jpg'
import dog10 from '../assets/dog10.jpg'
import dog11 from '../assets/dog11.jpg'
import dog12 from '../assets/dog12.jpg'
import uniqid from 'uniqid'

const Container = (props) => {
    const { setScore, bestScore, setBestScore } = props

    const handleClick = () => {
        setCardArr(prevCardArr => shuffleArray([...prevCardArr]))
    }

    const [cardArr, setCardArr] = useState(
        [
            <Card location={dog1} alt='' key={uniqid()} handleClick={handleClick}/>,
            <Card location={dog2} alt='' className='crop-right' key={uniqid()} handleClick={handleClick}/>,
            <Card location={dog3} alt='' key={uniqid()} handleClick={handleClick}/>,
            <Card location={dog4} alt='' className='crop-right' key={uniqid()} handleClick={handleClick}/>,
            <Card location={dog5} alt='' key={uniqid()} handleClick={handleClick}/>,
            <Card location={dog6} alt='' key={uniqid()} handleClick={handleClick}/>,
            <Card location={dog7} alt='' key={uniqid()} handleClick={handleClick}/>,
            <Card location={dog8} alt='' key={uniqid()} handleClick={handleClick}/>,
            <Card location={dog9} alt='' key={uniqid()} handleClick={handleClick}/>,
            <Card location={dog10} alt='' className='crop-left' key={uniqid()} handleClick={handleClick}/>,
            <Card location={dog11} alt='' className='crop-left' key={uniqid()} handleClick={handleClick}/>,
            <Card location={dog12} alt='' key={uniqid()} handleClick={handleClick}/>
        ]
    )

    const shuffleArray = (array) => {
        console.log("shuffling")
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    
    return(
        <div className='container'>
            {cardArr.map(card => {
                return card;
            })}
        </div>
    )
}

export default Container