//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [style, setStyle] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        type: type,
        msg: message
      });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
 
  // Function to remove classes
  const removeClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
}

 // Function to enable the dark mode
  const toggledark = (cls) => {
    removeClasses();
    document.body.classList.add(`bg-${cls}`);
    if (mode === 'light') {
      setMode('dark');
      setStyle('Enable Light Mode');
      document.body.style.backgroundColor = '#52677a';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'CryptoWrite : Dark Mode';
    }
    else {
      setMode('light');
      setStyle('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'CryptoWrite : Light Mode';
    }
  }
  return (
    <>
     <Router>
      <Navbar title='CryptoWrite' about='About us' mode={mode} toggledark={toggledark} style={style} />
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/about" 
          element={<About mode={mode} />}/>
        <Route exact path="/"
           element={<TextForm heading="Enter your text :" mode={mode} showAlert={showAlert}/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
