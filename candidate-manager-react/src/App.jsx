import './App.css';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OpenCandidates from './components/CandidatePages/OpenCandidates';
import ClosedCandidates from './components/CandidatePages/ClosedCandidates';
import PotentialCandidates from './components/CandidatePages/PotentialCandidates';
import ArchivedCandidates from './components/CandidatePages/ArchivedCandidates';
import InProgressCandidates from './components/CandidatePages/InProgressCandidates';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <NavBar />
          <Sidebar />
          <div style={{ margin: "20px" }}>
            <Routes>
              <Route path="/" element={<OpenCandidates />} />
              <Route path="/open" element={<OpenCandidates />} />
              <Route path="/closed" element={<ClosedCandidates />} />
              <Route path="/potential" element={<PotentialCandidates />} />
              <Route path="/archived" element={<ArchivedCandidates />} />
              <Route path="/in-progress" element={<InProgressCandidates />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
