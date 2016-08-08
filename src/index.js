import './scss/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'

// LocationBox
  // LocationHero
  // LocationList
    // LocationCard

let data = [
  {id:1, location:'New York', imageUrl: './assets/new_york.jpg'},
  {id:2, location:'Seattle', imageUrl: './assets/seattle.jpg'},
  {id:3, location:'Bangkok', imageUrl: './assets/bangkok.jpg'}
]

class LocationBox extends React.Component{
  constructor() {
    super();
    this.state = {
      location: 'New York',
      imageUrl: './assets/new_york.jpg'
    }
  }
  handleClick(evt, index) {
    let location = this.props.data[index].location
    let imageUrl = this.props.data[index].imageUrl
    this.setState({ location, imageUrl })
  }
  render() {
    return (
      <div className='location-box'>
        <LocationHero location={this.state.location} imageUrl={this.state.imageUrl}/>
        <LocationList data={this.props.data} onClick={(e, i) => this.handleClick(e, i)}/>
      </div>
    )
  }
}

class LocationHero extends React.Component{
  render() {
    return (
      <div className='location-hero'>
        <h1>{this.props.location}</h1>
        <div className='splash'>
          <img className='clip' src='./assets/brush-invert.png' alt=""/>
          <img src={this.props.imageUrl} alt=""/>
        </div>
      </div>
    )
  }
}

class LocationList extends React.Component{
  render() {
    let locationNodes = this.props.data.map((location, index) => {
      return(
        <LocationCard
          onClick={(e, i) => this.props.onClick(e, i)}
          index={index}
          location={location.location}
          imageUrl={location.imageUrl}
          key={location.id} />
      )
    })
    return (
      <div className='location-list'>
        {locationNodes}
      </div>
    )
  }
}

class LocationCard extends React.Component{
  render() {
    let {onClick, index, location, imageUrl} = this.props
    return (
      <div className='location-card' onClick={(e) => onClick(e, index)}>
        <h2>{location}</h2>
        <img src={imageUrl} alt=""/>
      </div>
    )
  }
}

ReactDOM.render(
  <LocationBox data={data} />,
  document.getElementById('app')
)
