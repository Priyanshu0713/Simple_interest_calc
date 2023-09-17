import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import InterestCalc from './js_flies/interestCalc';
import './css_files/InterestCalc.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InterestCalc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
