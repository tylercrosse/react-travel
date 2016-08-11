import './scss/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import LocationBox from './components/LocationBox.js'
import MainNav from './components/MainNav.js'

class App extends React.Component{
  render() {
    return (
      <div className='app'>
        <MainNav />
        <LocationBox data={data} />
      </div>
    )
  }
}

let data = [
  {id:1, location:'New York', imageUrl: './assets/new_york.jpg'},
  {id:2, location:'Seattle', imageUrl: './assets/seattle.jpg'},
  {id:3, location:'Bangkok', imageUrl: './assets/bangkok.jpg'},
  {id:4, location:'London', imageUrl: './assets/london.jpg'},
  {id:5, location:'Paris', imageUrl: './assets/paris.jpg'}
]

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
