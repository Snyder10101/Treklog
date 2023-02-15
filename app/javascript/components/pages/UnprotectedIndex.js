import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

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
              <Button>Learn More</Button>
            </CardBody>
          </Card>
        );
      })}
    </main>
  );
};


export default UnprotectedIndex