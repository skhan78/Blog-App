import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="My Blog App" about_us="About Us"/>
      <div className="container my-3">
        {/* <TextForm heading="Enter the text"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
