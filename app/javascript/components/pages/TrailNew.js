import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"


const TrailNew = ({ createTrail }) => {
  const [newTrail, setNewTrail] = useState({
    name: "",
    location: "",
    distance: "",
    duration: "",
    difficulty: "",
    description: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewTrail({...newTrail, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = () => {
     const navigate = useNavigate()
      createTrail(newTrail)
      navigate("/trailsindex")
  }
return (
  <>
    <h1>Create a new Trail</h1>
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="trail name">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Type the trail name"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="location">
              location
            </Label>
            <Input
              id="location"
              name="location"
              placeholder="Input the location"
              type="location"
              onChange={handleChange}
              />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="Distance">
          Distance
        </Label>
        <Input
          id="distance"
          name="Distance"
          placeholder="How many miles?"
          onChange={handleChange}
          />
      </FormGroup>
      <FormGroup>
        <Label for="Duration">
          Duration 
        </Label>
        <Input
          id="duration"
          name="duration"
          placeholder="How long was the hike?"
          onChange={handleChange}
          />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="Difficulty">
              Difficulty
            </Label>
            <Input
              id="difficulty"
              name="Difficulty"
              placeholder="Beginner, Intermediate, Advanced"
              onChange={handleChange}
              />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="Description">
              Description
            </Label>
            <Input
              id="description"
              name="Description"
              onChange={handleChange}
              />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="image">
              image
            </Label>
            <Input
              id="image"
              name="image"
              onChange={handleChange}
              />
          </FormGroup>
        </Col>
      </Row>
      <Button onClick={handleSubmit}>
        Add Trail
      </Button>
    </Form>
  </>
)
}


export default TrailNew