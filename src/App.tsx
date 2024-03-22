import './App.css';

import { FadeInOut } from './components/FadeOutUp/FadeOutUp';
import { SourceCodeDemo } from './components/SourceCodeDemo/SourceCodeDemo';

function App() {
  return (
    <>
      <SourceCodeDemo />
      <FadeInOut key={1} />
    </>
  );
}

export default App;
