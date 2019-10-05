import React from 'react'
import { Form, Header, } from 'semantic-ui-react'
import axios from 'axios'

class VideoForm extends React.Component{
  state = { title: "", duration: "", genre: "", description: "", trailer: "", vid_link: "", }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/videos', this.state)
      .then( res => {
        this.props.history.push('/')
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    const { title, duration, genre, description, trailer, vid_link, } = this.state
    return (
      <>
        <Header>Upload Video</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            label="Title"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
            required
          />
          <Form.Input 
            label="Video Link"
            name="vid_link"
            placeholder="Video Link"
            value={vid_link}
            onChange={this.handleChange}
            required
          />
          <Form.Input 
            label="Duration"
            name="duration"
            placeholder="00:00"
            value={duration}
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Genre"
            name="genre"
            placeholder="Genre"
            value={genre}
            onChange={this.handleChange}
          />
          <Form.Input 
            type="text"
            label="Description"
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Trailer"
            name="trailer"
            placeholder="Trailer"
            value={trailer}
            onChange={this.handleChange}
          />
          <Form.Button>Sumbit</Form.Button>
        </Form>
      </>
    )
  }
}

export default VideoForm