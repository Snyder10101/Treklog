import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const TrailNew = ({ createTrail, currentUser }) => {
  const [newTrail, setNewTrail] = useState({
    name: "",
    location: "",
    distance: "",
    duration: "",
    difficulty: "",
    description: "",
    image: "",
    user_id: currentUser.id,
  });
  const handleChange = (e) => {
    setNewTrail({ ...newTrail, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    createTrail(newTrail);
    navigate("/trailsindex");
  };
  return (
    <>
      <div className="new-overlay" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518623380242-d992d3c57b37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2912&q=80)", backgroundSize: 'cover', height:'700px', backgroundPosition: 'center'}} >
      <h1 className="new-title">Create a New Trail</h1>
      <Form className="edit-form">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="trail name">Trail Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Type the Trail Name..."
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="location">Trail Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="Type the City and State..."
                type="location"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="image">URL Image</Label>
          <Input
            id="image"
            name="image"
            placeholder="Type the URL Image..."
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            id="description"
            name="description"
            placeholder="Type a Description..."
            onChange={handleChange}
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="difficulty">Difficulty</Label>
              <Input
                id="difficulty"
                name="difficulty"
                placeholder="Choose between Beginner, Intermediate or Advanced..."
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
          <FormGroup>
            <Label for="distance">Distance</Label>
            <Input
              id="distance"
              name="distance"
              placeholder="Type the # of miles..."
              onChange={handleChange}
            />
          </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="duration">Duration</Label>
              <Input
                id="duration"
                name="duration"
                placeholder="Type the # of hours..."
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button className="submit-button" onClick={handleSubmit}>Add New Trail</Button>
      </Form>
      </div>
    </>
  );
};

export default TrailNew;
