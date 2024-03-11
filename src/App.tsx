import './App.css';

import img1 from './assets/1.jpg';
import { CrossFadeImg } from './components/CrossFadeImg';
import { Image } from './components/Image';
import { ReactCrossFade } from './components/ReactCrossFade';

function App() {
  return (
    <>
      <CrossFadeImg src={img1} />
      <Image />
      {/* <Countup /> */}
      {/* <CrossFade>
        <img
          src={img1}
          width={800}
          height={800}
        />
        <img
          src={img2}
          width={800}
          height={800}
        />
        <img
          src={img3}
          width={800}
          height={800}
        />
      </CrossFade> */}
      <ReactCrossFade />
    </>
  );
}

export default App;
