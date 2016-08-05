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
  }
  handleClick(evt, index) {
    console.log('pizza');
    console.log(index);
    // Think this is what you want
    // let location = this.props.data[index].location
    // this.setState({ location })
  }
  render() {
    return (
      <div className='location-box'>
        <LocationHero />
        <LocationList data={this.props.data} onClick={(e, i) => this.handleClick(e, i)}/>
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
    let locationNodes = this.props.data.map((location, index) => {
      return(
        <LocationCard
          onClick={(e, i) => this.props.onClick(e, i)}
          index={index}
          location={location.location}
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
    let {onClick, index, location} = this.props
    return (
      <div className='location-card' onClick={(e) => onClick(e, index)}>
        <h2>{location}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <LocationBox data={data} />,
  document.getElementById('app')
)
