import React from "react"
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, NavItem, Nav} from "reactstrap";
import { NavLink } from "react-router-dom"

const TrailShow = ({ trails, deleteTrail, logged_in, currentUser }) => {
  const { id } = useParams()
  let currentTrail = trails?.find((trail) => trail.id === +id)
    return (
      <main className="show-page">
      {currentTrail && (
        <>
          <img
            alt={"Picture of trail"}
            src={`${currentTrail.image}`}
            className="show-image"
          />
          <div className="show-info">
          <h1 style={{color: "white"}} className="index-title">Trail Information:</h1>
          <br></br>
          <h2 className="show-name" style={{color:"black"}}> <span className="show-content">Trail Name: </span>{`${currentTrail.name} `}</h2>
          <br></br>
          <h2 className="show-name"><span className="show-content">Distance: </span> {`${currentTrail.distance} miles`} </h2>
          <br></br>
          <h2 className="show-name"><span className="show-content">Difficulty: </span>{`${currentTrail.difficulty}`}</h2>
          <br></br>
          <h2 className="show-name"><span className="show-content">Duration: </span>{`${currentTrail.duration}`}</h2>
          <br></br>
          <h2 className="show-name"><span className="show-content">Location: </span>{`${currentTrail.location}`}</h2>
          <br></br>
          <h2 className="show-name"><span className="show-content">Description: </span>{`${currentTrail.description}`}</h2>
          <Nav>
          { logged_in && (
            <NavItem>
              { currentUser.id == currentTrail.user_id && (
              <Button className="show-buttons">
              <NavLink to={`/trailedit/${id}`} className="show-link">
                Edit Trail
              </NavLink>
              </Button>
              )}
              <Button to="/trailsindex" className="show-buttons">
                <NavLink onClick={() => {
                  deleteTrail(id)
                }} className="show-link">
                  Delete Trail
                </NavLink>
              </Button>
            </NavItem>
            )}
          </Nav>
        </div>
        </>
      )}
    </main>
  )
}

export default TrailShow