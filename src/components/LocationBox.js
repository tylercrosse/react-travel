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
      <div className='location-opinions'>
        <div className='opinions-menu'>
          <h3>Opinions</h3>
          <div className='opinions-sort'>
            <p>English v</p>
          </div>
          <div className='opinions-sort'>
            <p>Most Recent v</p>
          </div>
        </div>
        <Opinion />
        <Opinion />
        <Opinion />
        <Opinion />
      </div>
    )
  }
}

class Opinion extends React.Component{
  render() {
    return (
      <div className='opinion'>
        <div className='opinion-user'>
          <img className='user-icon-L' src="./assets/tyler_pixel.gif" alt=""/>
          <h4>Chloe Blomfontein</h4>
          <p>4/15/2016</p>
        </div>
        <div className='opinion-card'>
          <img className='opinion-img' src="./assets/liberty.jpg" alt=""/>
          <div className='opinion-details'>
            <div className='opinion-rating'>
              <img src="./assets/star-full.svg" alt=""/>
              <img src="./assets/star-full.svg" alt=""/>
              <img src="./assets/star-full.svg" alt=""/>
              <img src="./assets/star-half.svg" alt=""/>
              <img src="./assets/star-empty.svg" alt=""/>
            </div>
            <p>Quos consectetur quibusdam impedit dicta, deleniti sit molestiae? Hic nostrum quibusdam, iste maiores dolores dolore molestias incidunt officiis dignissimos. Obcaecati, optio architecto?</p>
            <p>location</p>
          </div>
        </div>
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
        <div className='location-rating'>
          <svg className='star' xmlns="http://www.w3.org/2000/svg" width="45.16" height="45.16" viewBox="0 0 45.16 45.16"><path d="M22.58 11.27c-6.237 0-11.31 5.074-11.31 11.31s5.073 11.313 11.31 11.313c6.236 0 11.31-5.074 11.31-11.312s-5.074-11.31-11.31-11.31zM22.58 7.944c-1.22 0-2.207-.988-2.207-2.206v-3.53C20.373.987 21.36 0 22.58 0c1.22 0 2.207.988 2.207 2.207v3.53c0 1.22-.99 2.207-2.207 2.207zM22.58 37.215c-1.22 0-2.207.988-2.207 2.207v3.53c0 1.22.988 2.208 2.207 2.208 1.22 0 2.207-.988 2.207-2.208v-3.53c0-1.22-.99-2.207-2.207-2.207zM32.928 12.23c-.86-.86-.86-2.258 0-3.12l2.497-2.497c.86-.86 2.26-.86 3.12 0 .863.862.863 2.26 0 3.12l-2.496 2.498c-.862.863-2.26.863-3.122 0zM12.23 32.93c-.86-.863-2.258-.863-3.12 0l-2.497 2.496c-.86.86-.862 2.26 0 3.12.862.862 2.26.862 3.12 0l2.498-2.497c.863-.862.863-2.26 0-3.12zM37.215 22.58c0-1.22.988-2.207 2.207-2.207h3.53c1.22 0 2.208.988 2.208 2.207 0 1.22-.988 2.206-2.207 2.206h-3.53c-1.22 0-2.208-.987-2.208-2.206zM7.944 22.58c0-1.22-.988-2.207-2.207-2.207h-3.53C.987 20.373 0 21.36 0 22.58c0 1.22.988 2.206 2.207 2.206h3.53c1.22 0 2.207-.987 2.207-2.206zM32.928 32.93c.862-.86 2.26-.86 3.12 0l2.498 2.497c.862.86.862 2.26 0 3.12s-2.26.86-3.12 0l-2.498-2.497c-.862-.862-.862-2.26 0-3.12zM12.23 12.23c.863-.86.863-2.258 0-3.12L9.735 6.614c-.862-.862-2.26-.862-3.12 0-.863.86-.863 2.26 0 3.12L9.11 12.23c.862.864 2.26.864 3.12 0z"/></svg>
          <p><span>Excellent </span>
          (Lorem Ipsum)</p>
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