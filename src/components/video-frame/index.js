import { h, Component } from 'preact';
import YTPlayer from 'yt-player';
import style from './style';

export default class SigninWidget extends Component {
  componentDidMount() {
    const elm = this.base.getElementsByClassName('tube')[0];
    const player = new YTPlayer(elm, {
      controls: false
    });

    player.load(this.props.videoId);
    player.setVolume(100);
  }
  render() {
    return (
      <div class={style.videoFrame}>
        <div class="tube" />
        <div class={style.status}>{this.props.status}</div>
      </div>
    );
  }
}
