import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage({getBeers, getRandomBeer, addNewBeer}) {
    return (
        <div>
             <Link to='/beers' onClick={getBeers} >Beers</Link>
             <Link to='/random-beer' onClick={getRandomBeer} >Random-beer</Link>
             <Link to='/new-beer' onClick={addNewBeer} >New-beer</Link>
        </div>
    )
}
