import React from "react";
import { Card, CardBody, Button, CardTitle, CardSubtitle, } from "reactstrap";
import { NavLink } from "react-router-dom"

const ProtectedIndex = ({ trails, current_user }) => {
    
  const currentUserTrails = trails?.filter((trail) => {
    return trail.user_id === current_user.id 
  })
  
  return (
    <div className="index-overlay" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1541928787372-6e5088530c93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80)", backgroundSize: 'cover', height:'auto', backgroundPosition: 'center'}} >
    <h1 className="my-trail-title">My Trails</h1>
    <main className="index-cards">
      {currentUserTrails?.map((trail, index) => {
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
              <Button color="success" outline className="index-button">
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


export default ProtectedIndex