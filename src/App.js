import logo from './logo.svg';
import './App.css';
import Home from './Layouts/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/> 
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
