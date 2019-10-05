import React from 'react';
import axios from 'axios'
import Video from './Video'
import styled from 'styled-components';

class Home extends React.Component {
  state = { videos: [] }

  componentDidMount() {
    axios.get('/api/videos')
    .then(res => this.setState({videos: res.data, }))
  }

  renderVideos = () => {
    const { videos } = this.state;

    if (videos.length <= 0)
    return <h2> No Videos to Display </h2>
    return videos.map(video => 
      <Video
      key={video.id}
      {...video}
      deleteVideo={this.deleteVideo}
      />)
  }

    deleteVideo = (id) => {
      axios.delete(`/api/videos/${id}`)
      .then( res => {
        const { videos } = this.state;
        this.setState({ videos: videos.filter( v => v.id !== id),})
      })
    }

  render() 
  {
    return (
      <>
        <StyledText> All  Videos </StyledText>
          <VideoContainer>
          
            <div style={{display: "flex", flexWrap: "wrap",}}>
            {this.renderVideos()}
            </div>
          </VideoContainer>
      </>
    )
  }
}

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const StyledText = styled.h1`
  margin-left: 100px;
`;

export default Home


