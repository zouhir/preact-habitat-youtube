import habitat from 'preact-habitat';
import Widget from './components/widget';

function init() {
  let newTube = habitat(Widget);
  let anotherNewTube = habitat(Widget);
  newTube.render();
  anotherNewTube.render({ name: 'data-mount-there', value: 'youtube-three' })
}

// in development, set up HMR:
if (module.hot) {
  require('preact/devtools'); // enables React DevTools, be careful on IE
  module.hot.accept('./components/widget', () => requestAnimationFrame(init));
}

init();
