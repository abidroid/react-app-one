import './App.css';
import BackgroundChange from './components/BackgroundChange.js';
import Counter from './components/Counter.js';
import MoodChanger from './components/MoodChanger.js';
import SingleViewConditionalUpdate from './components/SingleViewConditionalUpdate.js';
import ImageDisplay from './components/ImageDisplay.js';

function Header() {
  return <h1>Welcome to React</h1>
}

function App() {
  return (
    <>
    <ImageDisplay />
    {/* <SingleViewConditionalUpdate /> */}
    {/* <MoodChanger /> */}
    {/* <BackgroundChange /> */}
    {/* <Counter /> */}
    {/* <Lightbulb /> */}
    {/* <ArrayDestructure /> */}
      {/* <Header />
      <Btn /> */}
      {/* <NumberGuessBetween1and3 /> */}
    </>


  );
}

export default App;
