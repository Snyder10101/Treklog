import React from "react";
import { Card, CardBody, Button, CardTitle, CardSubtitle, } from "reactstrap";
import { NavLink } from "react-router-dom"

const ProtectedIndex = ({ trails, current_user }) => {
    
  const currentUserTrails = trails?.filter((trail) => {
    return trail.user_id === current_user.id 
  })

return (
    <div className="index-overlay" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1541928787372-6e5088530c93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80)", backgroundSize: 'cover', height:'700px', backgroundPosition: 'center'}} >
    <main className="index-background">
      <h1>My Trails</h1>
      <div>
      {currentUserTrails?.map((trail, index) => {

        return (
          <div>
          <Card color="light" style={{ width: "18rem"}} key={index}>
            <img alt="Trail Pic" src={trail.image} />
            <CardBody>
              <CardTitle tag="h5">{trail.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                location {trail.location} Distance:{trail.distance}
              </CardSubtitle>
              <Button>
                <NavLink to={`/show/${trail.id}`}>
                  Learn More
                </NavLink>
              </Button>
            </CardBody>
          </Card>
          </div>
        );
      })}
      </div>
    </main>
    </div>
  );
};


export default ProtectedIndex