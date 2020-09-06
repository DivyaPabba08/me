import React, { Component } from 'react'

export default class Skillset extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="skillset">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">My expertise:</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building Websites using Javascript,Typescript,Angular4,ReactJs deployed on GAIA(JPMC hybrid Cloud) and AWS
</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Backend Development</h3>
                    <p>I built backend-systems and micro-services using JAVA,Spring Boot4,Hibernate,Spring Data JPA,
Apache Kafka and have hands-on programming experience in Python,C,C++,</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Middleware Systems</h3>
                    <p>I have experience building routing applications using IBM Integration Bus(IBM AppConnect) and MQExplorer</p>
                </div>
                </div>
            </div>
            
           
            </div>
            

        </div>
        </section>


          
      </div>
      )
    }
  }
  