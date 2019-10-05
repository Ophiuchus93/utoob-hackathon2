import React from "react";
import axios from "axios";
import Iframe from 'react-iframe'

class ShowVideo extends React.Component {
  state = { video: {}, }

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ video: res.data })
      })
  }


  render() {

    const { match: { params: { vid_link } } } = this.props
    const { video } = this.state
    return (

      <div>
        <Iframe 
          src={video.vid_link}
          width="450px"
          height="450px"
          id="video.id"
          className="myClassname"
          display="initial"
          position="relative" />
      </div>
    )
  }
}
export default ShowVideo;