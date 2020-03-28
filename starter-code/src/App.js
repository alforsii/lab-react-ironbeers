import React, { Component, createContext } from 'react';
import axios from 'axios'
import { Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Beers from './components/Beers'
import  RandomBeer from './components/RandomBeer'
import './App.css';

const api = 'https://ih-beers-api2.herokuapp.com/beers'

export const MyContext = createContext()
export class App extends Component {
  state = {
    beers: null,
    newBeer: null,
    randomBeer: null,
    isLoading: false
  };

  getBeers = async () => {
    this.showLoading()
    this.setState({ isLoading: true })
    
    const beers = await axios.get(api)

    setTimeout(()=> {
      this.removeLoading()
      this.setState({ beers, isLoading: false})
    }, 2000)
  }

  getRandomBeer = async () => {
    this.showLoading()
    this.setState({ isLoading: true })
    const randomBeer = await axios.get(`${api}/random`)

    setTimeout(()=> {
      this.setState({ randomBeer, isLoading: false})
      this.removeLoading()
    }, 2000)
  }

   showLoading() {
   document.querySelector('.loader').classList.add('show');
  }
   removeLoading() {
   document.querySelector('.loader').classList.remove('show');
  }
  

  addNewBeer = async (path) => {
    this.showLoading()
    this.setState({ isLoading: true })
    const newBeer = await axios.post(`${api}/${path}`)

    setTimeout(()=> {
      this.removeLoading() 
      this.setState({ newBeer, isLoading: false})
    }, 2000)
  }



  render() {
    return (
        <div className='App'>
            <MyContext.Provider  value={this.state}>
            {/* {  this.state.isLoading && */}
                       <div className="loader">
                       <div className="circle"></div>
                       <div className="circle"></div>
                       <div className="circle"></div>
                     </div>

            { !this.state.isLoading &&
            <>
              <HomePage getBeers={this.getBeers} getRandomBeer={this.getRandomBeer} addNewBeer={this.addNewBeer}/>
          
          <Switch>
            <Route path='/beers' exact strict component={Beers} />
            <Route path='/random-beer' exact strict component={RandomBeer} />
          </Switch>
            </>
            }
          </MyContext.Provider>
        </div>

    );
  }
}

export default App;
