import './App.css';

import img3 from './assets/dima-dallacqua-_omSqvm_Ohk-unsplash.jpg';
import img1 from './assets/dima-dallacqua-DgjKb7Y_R-4-unsplash.jpg';
import img2 from './assets/dima-dallacqua-TkDvYSgkyFw-unsplash.jpg';
import { CrossFade } from './components/CrossFade';
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
