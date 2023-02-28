import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import christianPic from "../assets/christianPic.jpg"
import davePic from "../assets/davePic.jpg"
import oscarPic from "../assets/oscarPic.jpg"
import monicaPic from "../assets/monicaPic.jpg"

const AboutUs = () => { 

  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');
    </style>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,700&display=swap');
    </style>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Lora&family=Playfair+Display:ital,wght@0,500;1,700&display=swap');
    </style>
    <div className="about-overlay" style={{ backgroundImage: "url(https://images.pexels.com/photos/2254030/pexels-photo-2254030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)", backgroundSize: 'cover', height:'1100px', backgroundPosition: 'center'}} >
    <div className="container">
    <main className="about-cards">
      <Card style={{ width: '18rem' }} className="individual-card">
        <CardBody>
          <CardTitle tag="h5" className="about-name">
            Oscar Gomez
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6" >
            Project Lead
          </CardSubtitle>
        </CardBody>
        <img
          alt="Oscar's Picture"
          src={oscarPic}
          width="100%"
          className="about-images"
        />
        <Button outline color='#e4b388' id="oscar" type="button" className="about-toggle-button">
            Click to get to know me
        </Button>
        <UncontrolledPopover placement="bottom" target="oscar">
          <PopoverHeader style={{textAlign:'center'}} className="about-header">
            Meet Oscar
          </PopoverHeader>
            <PopoverBody style={{ margin: '1rem'}} className="about-body">
              Hi there, I'm a passionate individual with a deep love for exploration and adventure. I am always eager to travel and immerse myself in new cultures, whether it be hiking through a lush forest or discovering hidden gems in a bustling city. When I'm not out exploring the world, you can find me strumming on my guitar, as I am on a constant quest to master this beautiful instrument. I believe that life is all about learning and growing, and these three passions of mine - traveling, hiking, and playing guitar - provide me with the perfect outlets to do just that.
            </PopoverBody>
            <Button active outline size="sm" className="about-button">
              <a href="https://github.com/oagomezz" target="_blank" className="about-link">Visit my Github</a>
            </Button>
        </UncontrolledPopover>
      </Card>
      <Card style={{ width: '18rem' }} className="individual-card">
        <CardBody>
          <CardTitle tag="h5" className="about-name">
            Dave Farmer
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6" >
            Product Lead
          </CardSubtitle>
        </CardBody>
        <img
          alt="Dave's Picture"
          src={ davePic }
          width="100%"
          className="about-images"
        />
        <Button outline color='#e4b388' id="dave" type="button" className="about-toggle-button">
            Click to get to know me
        </Button>
        <UncontrolledPopover placement="bottom" target="dave">
          <PopoverHeader style={{textAlign:'center'}} className="about-header">
            Meet Dave
          </PopoverHeader>
            <PopoverBody style={{ margin: '1rem'}} className="about-body">
              Hi, I'm Dave, a junior full-stack developer who loves creating innovative software to solve real-world problems. When I'm not coding, I enjoy snowboarding, hiking, and gaming. This app combines my passion for technology and the outdoors, and I hope it enhances your life. Thanks for choosing this app!
              <p style={{color: "white", fontSize: "small"}}>Hi, I'm Dave, a junior full-stack developer who loves creating innovative software to solve real-world problems. When I'm not</p>
            </PopoverBody>
            <Button active outline size="sm" className="about-button">
              <a href="https://github.com/Dgfarm02" target="_blank" className="about-link">Visit my Github</a>
            </Button>
        </UncontrolledPopover>
      </Card>
      <Card style={{ width: '18rem' }} className="individual-card">
        <CardBody>
          <CardTitle tag="h5" className="about-name">
            Christian Snyder
          </CardTitle>
          <CardSubtitle className="mb-2" tag="h6" >
            Tech Lead
          </CardSubtitle>
        </CardBody>
        <img
          alt="Christian's Picture"
          src={christianPic}
          width="100%"
          className="about-images"
        />
          <Button outline color='#e4b388' id="christian" type="button" className="about-toggle-button">
            Click to get to know me
          </Button>
          <UncontrolledPopover placement="bottom" target="christian" >
          <PopoverHeader style={{textAlign:'center'}} className="about-header">
            Meet Christian
          </PopoverHeader>
            <PopoverBody style={{ margin: '1rem'}} className="about-body">
            Hey there, I'm a junior full-stack developer who's passionate about both coding and the great outdoors. When I'm not immersed in my latest project, you can usually find me hitting the trails, camping out under the stars, or just enjoying the beauty of nature.
            I've always been fascinated by technology and the incredible things we can achieve with it. That's why I decided to pursue a career in software development. I love the challenge of building complex systems that can make people's lives easier and more enjoyable. Whether I'm working on the front-end or back-end, I'm always striving to create user-friendly and responsive interfaces that people will love.
            </PopoverBody>
            <Button active outline size="sm" className="about-button">
              <a href="https://github.com/Snyder10101" target="_blank" className="about-link">Visit my Github</a>
            </Button>
          </UncontrolledPopover>
      </Card>
      <Card style={{ width: '18rem' }} className="individual-card">
        <CardBody>
          <CardTitle tag="h5" className="about-name">
            Monica Arganda
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6"  >
            Design Lead
          </CardSubtitle>
        </CardBody>
        <img
          alt="Monica's Picture"
          src={monicaPic}
          width="100%"
          className="about-images"
        />
        <Button outline color='#e4b388' id="monica" type="button" className="about-toggle-button">
            Click to get to know me
        </Button>
        <UncontrolledPopover placement="bottom" target="monica">
          <PopoverHeader style={{textAlign:'center'}} className="about-header">
            Meet Monica
          </PopoverHeader>
            <PopoverBody style={{ margin: '1rem'}} className="about-body">
              Hi my name is Monica, I'm a Junior Full-Stack Software Developer and enthusiastic hiker who's excited to bring my passion for the great outdoors to this hiking app. Whether I'm exploring local trails or venturing out to new destinations, I love nothing more than getting outside and breathing in the fresh air. When I'm taking a break from hiking, I love to curl up with a good book and lose myself in a story. With this app, I am excited to build a platform where hikers like myself can connect, share their experiences, and discover new adventures.
            </PopoverBody>
            <Button active outline size="sm" className="about-button">
              <a href="https://github.com/monicaarganda" target="_blank" className="about-link">Visit my Github</a>
            </Button>
        </UncontrolledPopover>
      </Card>
      </main>
      </div>
      </div>
    </>
  );
}


export default AboutUs