import React from "react"
import { Card, CardBody, CardText, CardTitle, CardSubtitle, CardLink } from 'reactstrap'
// import christianPic from "app/assets/christianPic.jpg"
// import davePic from "app/assets/davePic.jpg"
// import oscarPic from "app/assets/oscarPic.jpg"

const AboutUs = () => {
  
    return (
      <>
      <main className="about-cards">
        <Card style={{ width: '18rem' }} className="individual-card">
          <CardBody>
            <CardTitle tag="h5">
              Christian Snyder
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6" >
              Tech Lead
            </CardSubtitle>
          </CardBody>
          <img
            alt="Christian's Picture"
            src="https://picsum.photos/318/180"
            width="100%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            <CardLink href="#">
              Card Link
            </CardLink>
          </CardBody>
        </Card>
        <Card style={{ width: '18rem' }} className="individual-card">
          <CardBody>
            <CardTitle tag="h5">
              Dave Farmer
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6" >
              Product Lead
            </CardSubtitle>
          </CardBody>
          <img
            alt="Dave's Picture"
            src="https://picsum.photos/318/180"
            width="100%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            <CardLink href="#">
              Card Link
            </CardLink>
          </CardBody>
        </Card>
        <Card style={{ width: '18rem' }} className="individual-card">
          <CardBody>
            <CardTitle tag="h5">
              Oscar Gomez
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6" >
              Project Lead
            </CardSubtitle>
          </CardBody>
          <img
            alt="Oscar's Picture"
            src="https://picsum.photos/318/180"
            width="100%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            <CardLink href="#">
              Card Link
            </CardLink>
          </CardBody>
        </Card>
        <Card style={{ width: '18rem' }} className="individual-card">
          <CardBody>
            <CardTitle tag="h5">
              Monica Arganda
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6" >
              Design Lead
            </CardSubtitle>
          </CardBody>
          <img
            alt="Monica's Picture"
            src="https://picsum.photos/318/180"
            width="100%"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            <CardLink href="#">
              Card Link
            </CardLink>
          </CardBody>
        </Card>
        </main>
      </>
    );
  }


export default AboutUs