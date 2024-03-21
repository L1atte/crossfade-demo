import './App.css';

import { SourceCodeDemo } from './components/SourceCodeDemo/SourceCodeDemo';
import { WorldClock } from './components/WorldClock/WorldClock';

function App() {
  return (
    <>
      <WorldClock />

      <SourceCodeDemo />
      {/* <Test />
      <Countup />
      <CrossFadeImg src={img1} />
      <Image />
      <ReactCrossFade /> */}
    </>
  );
}

export default App;
