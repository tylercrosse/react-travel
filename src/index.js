import './scss/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'

// LocationBox
  // LocationHero
  // LocationList
    // LocationCard

let data = [
  {id:1, location:'New York'},
  {id:2, location:'Seattle'},
  {id:3, location:'Bangkok'}
]

class LocationBox extends React.Component{
  constructor() {
    super();
    this.state = {
      location: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    console.log('pizza');
    console.log(this.props);
    this.setState({location: this.props.location})
  }
  render() {
    return (
      <div className='location-box'>
        <LocationHero />
        <LocationList data={this.props.data} onClick={this.handleClick}/>
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
    let locationNodes = this.props.data.map(function(location) {
      return(
        <LocationCard location={location.location} key={location.id} />
        
      )
    })
    return (
      <div className='location-list' onClick={this.props.onClick}>
        {locationNodes}
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

ReactDOM.render(
  <LocationBox data={data} />,
  document.getElementById('app')
)