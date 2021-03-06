import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


const urls = {
  image: "https://i1.ytimg.com/vi/",
  video: "https://www.youtube.com/embed/"
}


class YouTube extends React.Component{

  render(){
    const video = this.props.videoId
    const vid = urls.video + video + "?autoplay=1"
    const iid = urls.image + video + "/" + this.props.size.n + ".jpg"

    return(
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {
          this.props.play ?
            <iframe 
              src={vid}
              frameBorder="0"
              width={this.props.size.w} 
              height={this.props.size.h}
            />:
            <img 
              src={iid} 
              width={this.props.size.w} 
              height={this.props.size.h} 
              onClick={this.props.hPlayVideo}
            />
        }
      </div>
    )
  }
}

YouTube.propTypes = {
  play: PropTypes.bool.isRequired,
  size: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  hPlayVideo: PropTypes.func.isRequired,
  videoId: PropTypes.string.isRequired,
}

YouTube.defaultProps = {
  size: {},
}
    

export default YouTube
