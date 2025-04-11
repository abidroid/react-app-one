import './App.css';
import BackgroundChange from './components/BackgroundChange.js';
import Counter from './components/Counter.js';
import MoodChanger from './components/MoodChanger.js';
import SingleViewConditionalUpdate from './components/SingleViewConditionalUpdate.js';
import ImageDisplay from './components/ImageDisplay.js';
import VideoPlayerComponent from './components/VideoPlayerComponent.js';
import AudioPlayComponent from './components/AudioPlayComponent.js';
import SimpleCalculator from './components/SimpleCalculator.js';
import DessertsList from './components/DessertsList.js';

function Header() {
  return <h1>Welcome to React</h1>
}

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <>
    <DessertsList data={desserts} />
    {/* <SimpleCalculator /> */}
    {/* <AudioPlayComponent /> */}
    {/* <VideoPlayerComponent videoUrl='https://www.youtube.com/watch?v=5j50FNMxMR00s' /> */}
    {/* <ImageDisplay /> */}
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
