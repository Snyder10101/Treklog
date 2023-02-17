import React from "react";
import { Card, CardBody, Button, CardTitle, CardSubtitle, } from "reactstrap";
import { NavLink } from "react-router-dom"

const ProtectedIndex = ({ trails, current_user }) => {
    
  const currentUserTrails = trails?.filter((trail) => {
    return trail.user_id === current_user.id 
  })

return (
    <main>
      <h1>My Trails</h1>
      <div>
      {currentUserTrails?.map((trail, index) => {

        return (
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
        );
      })}
      </div>
    </main>
  );
};


export default ProtectedIndex