import React, { Component } from 'react'
import { MyContext} from '../App'
import './Beers.css'

export class RandomBeers extends Component {
    render() {
        return (
            <MyContext.Consumer>
                { context => {
                    const { name, image_url, tagline, description} = context.randomBeer.data
                console.log("Output for: Beers -> render -> context", context)
                if(context.randomBeer){
                    return (
                        <div className='beers-div'>
                                    <div className='each-beer'>
                                        <img className='beer-img' src={image_url} alt={name} />
                                        <div>
                                            <p >Name: {name}</p>
                                            <ul>
                                            <li>Tagline: {tagline} </li>
                                            <li>Description: {description} </li>
                                            </ul>
                                        </div>
                                    </div>
                        </div>
                    )
                }
                    
                }}
            </MyContext.Consumer>
        )
    }
}

export default RandomBeers
