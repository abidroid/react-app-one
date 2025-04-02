import './App.css';
import Btn from './components/Btn.js'
import FourWaysToHandleEvent from './components/FourWaysToHandleEvent.js';


function Header() {
  return <h1>Welcome to React</h1>
}

function App() {
  return (
    <>
      {/* <Header />
      <Btn /> */}
      <FourWaysToHandleEvent />
    </>


  );
}

export default App;
