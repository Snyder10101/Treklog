import React from "react"
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, NavItem, Nav} from "reactstrap";
import { NavLink } from "react-router-dom"

const TrailShow = ({ trails, deleteTrail, logged_in }) => {
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
            alt={"Picture of trail"}
            src={`${currentTrail.image}`}
          />
          <div>
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
          <Nav>
          { logged_in && (
            <NavItem>
              <NavLink to={`/trailedit/${id}`} className="nav-link">
                Edit Trail
              </NavLink>
              <NavLink to="/trailsindex">
                <Button onClick={() => {
                  deleteTrail(id)
                }}>
                  Delete Trail
                </Button>
              </NavLink>
            </NavItem>
            )}
          </Nav>
        </div>
        </Card>
      )}
    </main>
  )
}

export default TrailShow