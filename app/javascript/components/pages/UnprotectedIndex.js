import React from "react";
import { Card, CardBody, Button, CardTitle, CardSubtitle, } from "reactstrap";
import { NavLink } from "react-router-dom"

const UnprotectedIndex = ({ trails }) => {
    return (
<main>
      {trails?.map((trail, index) => {
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
    </main>
  );
};


export default UnprotectedIndex