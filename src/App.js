import './App.css';
import {Route, Routes} from "react-router-dom";
import Encrypt from './Views/Encrypt/Encrypt';
import Decrypt from './Views/Decrypt/Decrypt';
import Home from './Views/Home/Home';
import Test from './Views/Test/Test';
import Aeshome from './Views/Aeshome/Aeshome';
import Steghome from './Views/Steghome/Steghome'
import Hide from './Views/Hide/Hide';
import Find from './Views/Find/Find';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aeshome" element={<Aeshome/>}/>
      <Route path="/steghome" element={<Steghome/>}/>
      <Route path="/aeshome/encrypt" element={<Encrypt/>}/>
      <Route path="/aeshome/decrypt" element={<Decrypt/>}/>
      <Route path="/steghome/hide" element={<Hide/>} />
      <Route path="/steghome/see" element={<Find/>} />
    </Routes>
    </>
  );
}

export default App;
