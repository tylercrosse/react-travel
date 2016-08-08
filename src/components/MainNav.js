import React from 'react'

class MainNav extends React.Component{
  render() {
    return (
      <nav>
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM64 256c0-106 86-192 192-192v384C150 448 64 362 64 256z"/></svg>
        <h2>bedouin</h2>
        <NavUser />
        <div className='map-icons'>
          <img src="./assets/weapons-opt.svg" alt=""/>
          <img src="./assets/pin-opt.svg" alt=""/>
        </div>
      </nav>
    )
  }
}

class NavUser extends React.Component{
  constructor() {
    super();
    this.state = {
      open: 'close'
    }
    this.handleNavUserOpen = this.handleNavUserOpen.bind(this);
    this.handleNavUserClose = this.handleNavUserClose.bind(this);
  }
  handleNavUserOpen() {
    this.setState({open: this.state.open === 'close' ? 'open': 'close'});
  }
  handleNavUserClose() {
    this.setState({open: 'close'});
  }
  render() {
    return (
      <div onMouseOver={this.handleNavUserOpen} onMouseOut={this.handleNavUserClose} className='nav-user'>
        <img className='user-icon' src="./assets/tyler_pixel.gif" alt=""/>
        <ul className={this.state.open}>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70"><path d="M10 50H5c-2.8 0-5 2.2-5 5s2.2 5 5 5h5c2.8 0 5-2.2 5-5S12.8 50 10 50zM10 30H5c-2.8 0-5 2.2-5 5s2.2 5 5 5h5c2.8 0 5-2.2 5-5S12.8 30 10 30zM10 10H5c-2.8 0-5 2.2-5 5s2.2 5 5 5h5c2.8 0 5-2.2 5-5S12.8 10 10 10zM30 20h35c2.8 0 5-2.2 5-5s-2.2-5-5-5H30c-2.8 0-5 2.2-5 5S27.2 20 30 20zM65 30H30c-2.8 0-5 2.2-5 5s2.2 5 5 5h35c2.8 0 5-2.2 5-5S67.8 30 65 30zM65 50H30c-2.8 0-5 2.2-5 5s2.2 5 5 5h35c2.8 0 5-2.2 5-5S67.8 50 65 50z" fill="#030104"/></svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490"><path d="M311.5 184.4c0 36.1-29.2 65.3-65.3 65.3s-65.3-29.2-65.3-65.3 29.2-65.3 65.3-65.3S311.5 148.4 311.5 184.4zM245 0C109.9 0 0 109.9 0 245s109.9 245 245 245 245-109.9 245-245S380.1 0 245 0zM357.3 404.7c-8.2-65.7-35.2-133-111.1-133 -76.5 0-103.3 68.3-111.3 134.5C83.5 371 49.7 311.9 49.7 245c0-107.7 87.6-195.3 195.3-195.3S440.3 137.3 440.3 245C440.3 310.9 407.5 369.3 357.3 404.7z"/></svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 896 896"><title>  tool</title><path data-name="settings" d="M863.2 382.8L774.5 368a334.3 334.3 0 0 0-28.1-75.1l56.8-70.4A39.2 39.2 0 0 0 802 171.7L766.7 132a39.2 39.2 0 0 0-50.2-7.2l-75.9 47.7a334 334 0 0 0-112-50.5L513.7 32.8A39.2 39.2 0 0 0 475.1 0h-53.2a39.1 39.1 0 0 0-38.6 32.8L368.3 122a333.8 333.8 0 0 0-94.2 39.1l-72.2-51.5a39.2 39.2 0 0 0-50.5 4.2l-37.6 37.6a39.2 39.2 0 0 0-4.1 50.5l51.6 72.3a334.7 334.7 0 0 0-38.8 93.5l-89.7 15A39.2 39.2 0 0 0 0 421.4v53.2a39.2 39.2 0 0 0 32.8 38.7l89.7 15a333.7 333.7 0 0 0 29.7 78.2L95.7 676.4a39.2 39.2 0 0 0 1.2 50.7l35.3 39.7A39.2 39.2 0 0 0 182.3 774l77-48.4a333.5 333.5 0 0 0 109 48.4l14.9 89.3A39.1 39.1 0 0 0 421.9 896h53.2a39.2 39.2 0 0 0 38.7-32.8L528.6 774a333.3 333.3 0 0 0 93.1-38.5l75.2 53.7A39.1 39.1 0 0 0 747.4 785l37.6-37.6a39.1 39.1 0 0 0 4.1-50.5L735.6 621.9a333 333 0 0 0 38.9-93.8l88.8-14.8A39.1 39.1 0 0 0 896 474.6V421.4A39.2 39.2 0 0 0 863.2 382.8ZM449.4 616a168 168 0 1 1 168-168C617.4 540.8 542.2 616 449.4 616Z" transform="translate(0 -0.01)"/></svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.9 489.9"><path d="M25.4 290.5c-7.2-77.5 25.9-147.7 80.8-192.3 21.4-17.4 53.4-2.5 53.4 25l0 0c0 10.1-4.8 19.4-12.6 25.7 -38.9 31.7-62.3 81.7-56.6 136.9 7.4 71.9 65 130.1 136.8 138.1 93.7 10.5 173.3-62.9 173.3-154.5 0-48.6-22.5-92.1-57.6-120.6 -7.8-6.3-12.5-15.6-12.5-25.6l0 0c0-27.2 31.5-42.6 52.7-25.6 50.2 40.5 82.4 102.4 82.4 171.8 0 126.9-107.8 229.2-236.7 219.9C122.2 481.8 35.3 396.9 25.4 290.5zM244.9 0c-18 0-32.5 14.6-32.5 32.5v149.7c0 18 14.6 32.5 32.5 32.5s32.5-14.6 32.5-32.5V32.5C277.4 14.6 262.9 0 244.9 0z"/></svg>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default MainNav;