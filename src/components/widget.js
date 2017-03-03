// theirs
import { h, Component } from 'preact';

// ours
import VideoFrame from './video-frame';

export default class Widget extends Component {
  static defaultProps = {
    videoId: null
  };
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    let { videoId, suggestedBy, status } = this.props;
    return (
      <div id="video-frame">
        {suggestedBy
          ? <sup>
              YouTube suggestion credits to:{' '}
              <a href={`https://twitter.com/${suggestedBy}`}>@{suggestedBy}</a>
            </sup>
          : null}
        {videoId
          ? <VideoFrame
              videoId={videoId}
              suggestedBy={suggestedBy}
              status={status}
            />
          : null}
      </div>
    );
  }
}
