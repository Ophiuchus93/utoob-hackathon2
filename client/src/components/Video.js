import React from 'react'
import { Button, Card, } from "react-bootstrap"
import { Link, } from 'react-router-dom'
  
const Video = (props) => (
  <Card as={Link} to={`/videos/${props.id}`}>
    <Card.Img src={props.trailer} style={{width: '200px', height: '150px',}}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Button
        onClick={() => props.deleteVideo(props.id)}
      >Delete</Button>
    </Card.Body>
  </Card>
)

export default Video 