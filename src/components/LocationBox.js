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
            <div className='opinion-values'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 457.01 457.01"><path d="M228.504 0C132.978 0 55.262 77.716 55.262 173.242c0 72.85 36.307 141.856 82 198.566 39.92 49.544 79.412 80.427 81.073 81.717 2.992 2.324 6.58 3.485 10.17 3.485s7.178-1.16 10.17-3.485c1.66-1.29 41.152-32.173 81.072-81.717 45.716-56.737 82-125.737 82-198.566C401.748 77.716 324.032 0 228.505 0zm0 250.918c-45.706 0-82.89-37.185-82.89-82.89 0-45.708 37.184-82.893 82.89-82.893s82.892 37.185 82.892 82.892c0 45.706-37.185 82.89-82.892 82.89z"/></svg>
              <span>Statue of Liberty</span>
              <span className='like value-detail'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.661 208.661"><path d="M180.734 116.892c-1.007-1.882-.5-4.233 1.175-5.554 9.77-7.697 10.3-34.01-8.553-34.01h-48.99c-9.59 0-15.656-10.324-10.985-18.7 5.74-10.292 9.922-21.717 13.94-34.52C131.66 10.277 122.94 0 112.838 0c-5.384 0-11.157 2.91-15.564 9.756C84.603 29.448 75.68 52.076 63.252 64.13c-9.818 9.516-43.17 28.935-43.17 30.14v79.824c0 2.254 1.727 4.17 3.955 4.51l28.828 4.404c.643.1 1.283.34 1.827.696 25.968 17.054 49.343 24.957 68.432 24.957 5.144 0 9.98-.573 14.47-1.696 22.35-5.586 23.77-19.317 22.86-26.447-.293-2.302 1.165-4.408 3.407-5.006 11.945-3.18 12.496-19.43 8.712-27.307-1.057-2.2-.042-4.788 2.108-5.944 8.914-4.793 9.573-18.796 6.054-25.368z"/></svg>
              84</span>
            <span className='comments value-detail'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 554.475 554.475"><path d="M504.902 533.053c3.264 6.117 2.244 11.832-3.06 17.136-2.448 2.447-5.716 3.67-9.792 3.67-2.45 0-4.896-.61-7.348-1.835l-125.46-73.44c-26.927 7.347-54.263 11.02-82.007 11.02-38.352 0-74.358-6.428-108.018-19.28S106.18 440.033 81.09 418c-25.093-22.03-44.88-47.938-59.365-77.724C7.242 310.49 0 278.666 0 244.803c0-33.456 7.242-65.076 21.726-94.86C36.21 120.16 55.998 94.25 81.09 72.22s54.468-39.475 88.128-52.327C202.878 7.04 238.885.613 277.238.613c38.35 0 74.358 6.427 108.016 19.28 33.66 12.85 63.037 30.293 88.13 52.325 25.093 22.032 44.882 47.94 59.362 77.724 14.484 29.784 21.73 61.404 21.73 94.86 0 37.128-8.98 72.318-26.93 105.57-17.95 33.252-43.25 61.506-75.89 84.764l53.246 97.917z"/></svg>
              70</span>
            </div>
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