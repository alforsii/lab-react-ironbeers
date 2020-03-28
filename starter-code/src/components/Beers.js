import React, { Component, } from 'react'
import { MyContext} from '../App'
import './Beers.css'


export class Beers extends Component {
    render() {
        return (
            <MyContext.Consumer>
                { context => {
                console.log("Output for: Beers -> render -> context", context)
                if(context.beers){
                    return (
                        <div className='beers-div'>
                            { context.beers.data.map(beer => {
                                return (
                                    <div className='each-beer' key={beer._id}>
                                        <img className='beer-img' src={beer.image_url} alt={beer.name} />
                                        <div>
                                            <p >Name: {beer.name}</p>
                                            <ul>
                                            <li>Tagline: {beer.tagline} </li>
                                            <li>Description: {beer.description} </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
                    
                }}
            </MyContext.Consumer>
        )
    }
}

export default Beers
