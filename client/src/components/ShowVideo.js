import React from "react";
import axios from "axios";
import Iframe from 'react-iframe';
import { Button, } from "react-bootstrap";
import { Link, } from 'react-router-dom';

class ShowVideo extends React.Component {
  state = { video: {}, }

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ video: res.data })
      })
  }

  render() {
    const { video } = this.state
    return (
      <div>
        <Iframe 
          url={video.vid_link}
          width="750px"
          height="400px"
          id={video.id}
          className="myClassname"
          display="initial"
          position="relative" />
          <h2>{video.title}</h2>
          <p>{video.duration}</p>
          <p>{video.genre}</p>
          <p>{video.description}</p>
        <Button as={Link} to={`/edit_video/${video.id}`}>Edit Video</Button>
      </div>
    )
  }
}
export default ShowVideo;