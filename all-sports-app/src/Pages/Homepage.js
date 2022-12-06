import React from 'react'
import { useState, useEffect } from 'react'

const Homepage = () => {
    const [card, setCards] = useState([])

    const fecthCards = () => {
        fetch('https://sports.api.decathlon.com/sports/?parents_only=true')
        .then((res) => res.json())
        .then((res) => {
            setCards(res.data)
        })
        .catch(console.error)
    }

    console.log(card)

    useEffect(() => {
        fecthCards();
    }, []);

  return (
    <>
      
    </>
  )
}

export default Homepage