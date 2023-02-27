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
    <div className="show-overlay" style={{ backgroundImage: "url(https://images.unsplash.com/uploads/1412533519888a485b488/bb9f9777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)", backgroundSize: 'cover', height:'700px', backgroundPosition: 'center'}} >
      <h1 className="edit-title">Edit a Trail</h1>
      <Form className="edit-form">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="trail name">
                Trail Name
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
                Trail Location
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
        <Label for="image">
                URL Image
              </Label>
              <Input
                id="image"
                name="image"
                onChange={handleChange}
                value={editTrail.image}
                />
        </FormGroup>
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
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="difficulty">
                Difficulty (Beginner, Intermediate, Advanced)
              </Label>
              <Input
                id="difficulty"
                name="difficulty"
                onChange={handleChange}
                value={editTrail.difficulty}
                />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <Label for="duration">
            Duration (# of hours) 
          </Label>
          <Input
            id="duration"
            name="duration"
            onChange={handleChange}
            value={editTrail.duration}
            />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <Label for="distance">
              Distance (# of miles)
            </Label>
            <Input
              id="distance"
              name="distance"
              onChange={handleChange}
              value={editTrail.distance}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={handleSubmit}>
          Submit Edits
        </Button>
      </Form>
    </div>
    </>
  )
}

export default TrailEdit