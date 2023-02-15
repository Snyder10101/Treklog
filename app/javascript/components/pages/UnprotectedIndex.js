import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const UnprotectedIndex = ({trails}) => {
    return (
<main>
      {trails?.map((trails, index) => {
        return (
          <Card color="light" style={{ width: "18rem"}} key={index}>
            <img alt="Apartment Pic's" src={trails.image} />
            <CardBody>
              <CardTitle tag="h5">${trails.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                location {trails.location} Distance:{trails.distance}
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