import React from "react";
import { Card, CardBody, Button, CardTitle, CardSubtitle, } from "reactstrap";
import { NavLink } from "react-router-dom"

const UnprotectedIndex = ({ trails }) => {
  
  return (
    <div className="index-overlay" style={{ backgroundImage: "url(https://images.pexels.com/photos/6322882/pexels-photo-6322882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)", backgroundSize: 'cover', height:'auto', backgroundPosition: 'center'}} >
    <main className="index-cards">
      {trails?.map((trail, index) => {
        return (
          <Card color="light" style={{ width: "18rem"}} key={index} >
            <img alt="Trail Pic" src={trail.image} className="index-image"/>
            <CardBody>
              <CardTitle tag="h5" className="index-name"> {trail.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                <span className="index-title">Location: </span>{trail.location} 
                <br></br>
                <span className="index-title"> Difficulty: </span>{trail.difficulty} 
                <br></br>
                <span className="index-title"> Distance:</span> {trail.distance} miles
              </CardSubtitle>
              <Button to={`/show/${trail.id}`} color="success" outline className="index-button">
                <NavLink to={`/show/${trail.id}`} className="index-link">
                  Click to Explore
                </NavLink>
              </Button>
            </CardBody>
          </Card>
        );
      })}
    </main>
    </div>
  );
};


export default UnprotectedIndex