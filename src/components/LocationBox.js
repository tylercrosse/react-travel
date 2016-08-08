import React from 'react'

// LocationBox
  // LocationHero
  // LocationList
    // LocationCard
  // LocationDetails
  // LocationOpinions

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
        <div className='lower-container'>
          <LocationDetails location={this.state.location} />
          <LocationOpinions />
        </div>
      </div>
    )
  }
}

class LocationDetails extends React.Component{
  render() {
    return (
      <div className='location-details'>
        <h2>{this.props.location}</h2>
        <img src="./assets/world-map.png" alt=""/>
        <h3>Overview</h3>
        <p className='overview-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A iusto, quaerat cum ducimus doloribus. Odio unde sit molestias eveniet dolores accusamus voluptatibus suscipit et, repellendus harum perferendis eum eligendi! Fuga.</p>
        <ul>
          <li>
            <img src='./assets/details/sky.svg' alt=""/>
            <p><span>Weather: </span>
            lorem ipsum</p>
          </li>
          <li>
            <img src='./assets/details/clock.svg' alt=""/>
            <p><span>Local Time: </span>
            lorem ipsum</p>
          </li>
          <li>
            <img src='./assets/details/internet.svg' alt=""/>
            <p><span>Population: </span>
            lorem ipsum</p>
          </li>
          <li>
            <img src='./assets/details/bed.svg' alt=""/>
            <p><span>Lodging: </span>
            lorem ipsum</p>
          </li>
          <li>
            <img src='./assets/details/wallet.svg' alt=""/>
            <p><span>Cost of Living: </span>
            lorem ipsum</p>
          </li>
          <li>
            <img src='./assets/details/wifi.svg' alt=""/>
            <p><span>Internet: </span>
            lorem ipsum</p>
          </li>
          <li>
            <img src='./assets/details/cityscape.svg' alt=""/>
            <p><span>Workplace: </span>
            lorem ipsum</p>
          </li>
          <li>
            <img src='./assets/details/racing-helmet.svg' alt=""/>
            <p><span>Safety: </span>
            lorem ipsum</p>
          </li>
          <li>
            <img src='./assets/details/open-book-5.svg' alt=""/>
            <p><span>Languages: </span>
            lorem ipsum</p>
          </li>
          <li>
            <img src='./assets/details/martini.svg' alt=""/>
            <p><span>Nightlife: </span>
            lorem ipsum</p>
          </li>
        </ul>
      </div>
    )
  }
}

class LocationOpinions extends React.Component{
  render() {
    return (
      <h3>Opinions</h3>
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
        <h3>{location}</h3>
        <img src={imageUrl} alt=""/>
      </div>
    )
  }
}

export default LocationBox;