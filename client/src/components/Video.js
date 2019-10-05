import React from 'react'
import Iframe from 'react-iframe'
import { Button, } from "react-bootstrap"
  
const Video = (props) => {
  
    return (
      <div>
        <img src={props.trailer}/>
        <Button
          onClick={() => props.deleteVideo(props.id)}
        >Delete</Button>

      </div>
    )
  
}

export default Video 


