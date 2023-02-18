import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"


const TrailEdit = ({ trails, updateTrail, currentUser }) => {
  const { id } = useParams()
  let currentTrail = trails?.find((trail) => trail.id === +id)


  const [editTrail, setEditTrail] = useState({
    name: currentTrail?.name,
    location: currentTrail?.location,
    distance: currentTrail?.distance,
    duration: currentTrail?.duration,
    difficulty: currentTrail?.difficulty,
    description: currentTrail?.description,
    image: currentTrail?.image,
    user_id: currentUser?.id
  })
  const handleChange = (e) => {
    setEditTrail({...editTrail, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
      updateTrail(editTrail, currentTrail.id)
      navigate(`/show/${currentTrail.id}`)
  }
 
  return (
    <>
      <h1>Edit a Trail</h1>
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
                type="text"
                onChange={handleChange}
                value={editTrail.name}
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
                type="location"
                onChange={handleChange}
                value={editTrail.location}
                />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="distance">
            Distance
          </Label>
          <Input
            id="distance"
            name="distance"
            onChange={handleChange}
            value={editTrail.distance}
            />
        </FormGroup>
        <FormGroup>
          <Label for="duration">
            Duration 
          </Label>
          <Input
            id="duration"
            name="duration"
            onChange={handleChange}
            value={editTrail.duration}
            />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="difficulty">
                Difficulty
              </Label>
              <Input
                id="difficulty"
                name="difficulty"
                onChange={handleChange}
                value={editTrail.difficulty}
                />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="description">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                onChange={handleChange}
                value={editTrail.description}
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
                value={editTrail.image}
                />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={handleSubmit}>
          Edit Trail
        </Button>
      </Form>
    </>
  )
}

export default TrailEdit