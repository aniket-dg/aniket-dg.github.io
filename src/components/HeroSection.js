import React, { Component } from 'react'
import Typed from "react-typed";

export class HeroSection extends Component {
    constructor(props) {
      super(props)
      this.state ={          
      }
    }

    textLines = [
        'Web Developer', 'Devops Engineer','Passionate Programmer', 'Backend Developer'
      ];
    
  render() {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
          <div className="hero-container">
            <h1>Aniket Gavali</h1>
            
            <p className='text-center'>I'm <Typed strings={this.textLines} typeSpeed={60} /></p>
          </div>
        </section>
    )
  }
}

export default HeroSection