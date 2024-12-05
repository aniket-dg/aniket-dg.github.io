import React, { Component } from 'react'
import './About.css';
export class About extends Component {
  imgStyle = {
   
  }

  calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
  render() {
    const dob = '2001-12-25'; // Date of Birth
    const age = this.calculateAge(dob); // Dynamically calculate age
    return (
      <>
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>A passionate programmer and quick learner who is always excited to learn new technologies and contribute to the society for social impact. I have strong hands on Python-Django framework. Always looking for opportunities to boost my passion.
&nbsp;My areas of interest are Backend Development, DevOps, Blockchain.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/profile-img-minimized.jpg" style={this.imgStyle} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Backend Developer &amp; Devops Engineer.</h3>
            {/* <p className="fst-italic"> */}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore */}
              {/* magna aliqua. */}
            {/* </p> */}
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>25 December, 2001</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9322861739</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Pune, India</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>aniket.dg25@gmail.com</span></li>

                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{age}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Engineering</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Specialization:</strong> <span>Information Technology</span></li>
                  {/*<li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>*/}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
      </>
    )
  }
}

export default About