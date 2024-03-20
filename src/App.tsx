import './App.css';

import img1 from './assets/1.jpg';
import { Countup } from './components/Countup';
import { CrossFadeImg } from './components/CrossFadeImg';
import { Image } from './components/Image';
import { ReactCrossFade } from './components/ReactCrossFade';
import { SourceCodeDemo } from './components/SourceCodeDemo';
import { Test } from './components/Test';
import { WorldClock } from './components/WorldClock/WorldClock';

function App() {
  return (
    <>
      <WorldClock />
      <SourceCodeDemo />
      <Test />
      <Countup />
      <CrossFadeImg src={img1} />
      <Image />
      <ReactCrossFade />
    </>
  );
}

export default App;
