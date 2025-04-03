import './App.css';
import ArrayDestructure from './components/ArrayDestructure.js';
import Btn from './components/Btn.js'
import FourWaysToHandleEvent from './components/FourWaysToHandleEvent.js';
import NumberGuessBetween1and3 from './components/NumberGuessBtween1and3.js';


function Header() {
  return <h1>Welcome to React</h1>
}

function App() {
  return (
    <>
    <ArrayDestructure />
      {/* <Header />
      <Btn /> */}
      {/* <NumberGuessBetween1and3 /> */}
    </>


  );
}

export default App;
