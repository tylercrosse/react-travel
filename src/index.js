import './scss/main.scss'

import React from 'react'
import ReactDom from 'react-dom'

// LocationBox
  // LocationHero
  // LocationList
    // LocationCard

class LocationBox extends React.Component{
  render() {
    return (
      <div className='location-box'>
        <LocationHero />
        <LocationList />
      </div>
    )
  }  
}

class LocationHero extends React.Component{
  render() {
    return (
      <div className='location-hero'>
        <h1>Location</h1>
        <p>will be based on card state</p>
      </div>
    )
  }
}

class LocationList extends React.Component{
  render() {
    return (
      <div className='location-list'>
        <LocationCard location={'New York'} />
        <LocationCard location={'Seattle'} />
        <LocationCard location={'Bangkok'} />
      </div>
    )
  }
}

class LocationCard extends React.Component{
  render() {
    return (
      <div className='location-card'>
        <h2>{this.props.location}</h2>
      </div>
    )
  }
}

ReactDom.render(
  <LocationBox />,
  document.getElementById('app')
)