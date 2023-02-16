import React from "react"
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const UnprotectedShow = ({ trails }) => {
  const { id } = useParams()
  let currentTrail = trails?.find((trail) => trail.id === +id)
    return (
      <main>
      {currentTrail && (
        <Card
          style={{
            width: "18rem"
          }}
          key={id}
        >
          <img
            alt={`apartment listing for apartment located on ${currentTrail.name}`}
            src={`${currentTrail.image}`}
          />
          <CardBody>
            <CardTitle tag="h5">
              {`${currentTrail.name} `}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {`${currentTrail.distance} miles, Difficulty: ${currentTrail.difficulty}`}
            </CardSubtitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {`${currentTrail.duration}, ${currentTrail.location}`}
            </CardSubtitle>
            <CardText>
              {`${currentTrail.description}`}
            </CardText>
          </CardBody>
        </Card>
      )}
    </main>
  )
}

export default UnprotectedShow