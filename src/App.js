import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="My Blog App" about_us="About Us"/>
      <div className="container my-3">
        <TextForm heading="Enter the text"/>
      </div>
    </>
  );
}

export default App;
