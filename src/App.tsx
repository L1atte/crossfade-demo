import './App.css';

import img3 from './assets/dima-dallacqua-_omSqvm_Ohk-unsplash.jpg';
import img1 from './assets/dima-dallacqua-DgjKb7Y_R-4-unsplash.jpg';
import img2 from './assets/dima-dallacqua-TkDvYSgkyFw-unsplash.jpg';
import { Countup } from './components/Countup';
import { CrossFade } from './components/CrossFade';
import { Image } from './components/Image';

function App() {
  return (
    <>
      <Image />
      <Countup />
      <CrossFade>
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
      </CrossFade>
    </>
  );
}

export default App;
