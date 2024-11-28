import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         activeId: 1
      }
    }

    handleClick = (id) => {
        console.log("clicked", id);
        this.setState({
            activeId: id
        });
        console.log(this.state.activeId);
    }

  render() {
    return (
      <>

  <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src="assets/img/final.jpg" alt="" className="img-fluid rounded-circle" />
        <h1 className="text-light"><a href="index.html">Aniket G.</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="https://twitter.com/AniketG2512" className="twitter"><i className="bx bxl-twitter"></i></a>
          {/* <a href="#" className="facebook"><i className="bx bxl-leetcode"></i></a> */}
          {/* <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> */}
          <a href="https://github.com/aniket-dg/" className="github"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/aniket-dg/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" key={1} onClick={() => this.handleClick(1)}  className={ this.state.activeId === 1 ? "nav-link scrollto active": "nav-link scrollto" }><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" key={2} onClick={() => this.handleClick(2)} className={ this.state.activeId === 2 ? "nav-link scrollto active": "nav-link scrollto" }><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#skills" onClick={() => this.handleClick(3)} className={ this.state.activeId === 4 ? "nav-link scrollto active": "nav-link scrollto" }><i className="bx bx-book-content"></i> <span>Skills</span></a></li>
          <li><a href="#resume" onClick={() => this.handleClick(4)} className={ this.state.activeId === 3 ? "nav-link scrollto active": "nav-link scrollto" }><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          {/* <li><a href="#services" onClick={() => this.handleClick(5)} className={ this.state.activeId === 5 ? "nav-link scrollto active": "nav-link scrollto" }><i className="bx bx-server"></i> <span>Services</span></a></li> */}
          {/* <li><a href="#contact" onClick={() => this.handleClick(6)} className={ this.state.activeId === 6 ? "nav-link scrollto active": "nav-link scrollto" }><i className="bx bx-envelope"></i> <span>Contact</span></a></li> */}
        </ul>
      </nav>
    </div>
  </header>
      </>
    )
  }
}

export default Header