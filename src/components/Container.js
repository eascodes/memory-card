import React, { useEffect, useState } from 'react'
import '../styles/Container.css'
import uniqid from 'uniqid'

const Container = (props) => {
    const { score, setScore, bestScore, setBestScore } = props

    // Import all dog images
    function importAll(r) {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
    const images = importAll(require.context('../assets/dogs', false, /\.(png|jpe?g|svg)$/));

    // Create initial adjacency list w/ appropriate classes for img cropping
    let initialArr = []
    for (let i=1; i<13; i++) { initialArr.push({id: i, status: 'unclicked'}) }
    initialArr.map(item => {
        if (item.id === 1 || item.id === 3) { return {...item, className: 'crop-right'} }
        else if (item.id === 9 || item.id === 10) { return {...item, className: 'crop-left'} }
        else { return item }
    })

    // Set initial state with adjacency list
    const [arr, setArr] = useState(initialArr)

    const resetRound = () => {
        // Reset round score
        setScore(0)
        // Change all images back to unclicked
        setArr(prevArr => {
            return prevArr.map(item => {
                return {...item, status: 'unclicked'}
            })
        })
    }

    const handleClick = (e) => {        
        // Find index of target image in adjacency list array
        const index = arr.findIndex((item) => item.id === parseInt(e.target.id))
        // If image hasn't been clicked
        if (arr[index].status === 'unclicked') {
            // Increase the round score
            setScore(prevScore => prevScore + 1)
            // Mark the targeted image as clicked
            setArr(prevArr => {
                return shuffleArray(prevArr.map(item => {
                    return item.id === parseInt(e.target.id) ? {...item, status: 'clicked'} : item
                }))
            })
        } else {
            resetRound()
        }
    }

    // If round score is higher than best score, update best score
    useEffect(() => { if (score > bestScore) setBestScore(score) }, [score])

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    return(
        <div className='container'>
            {arr.map(item => {
                return <img 
                    src={images[`dog${item.id}.jpg`]} 
                    alt='Picure of a dog running' 
                    id={item.id} 
                    key={uniqid()} 
                    className={item.className}
                    onClick={handleClick}>
                </img>
            })}
        </div>
    )
}

export default Container