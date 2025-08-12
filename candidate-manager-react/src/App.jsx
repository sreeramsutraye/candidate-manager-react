import './App.css';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import OpenCandidates from './components/CandidatePages/OpenCandidates';
import ClosedCandidates from './components/CandidatePages/ClosedCandidates';
import PotentialCandidates from './components/CandidatePages/PotentialCandidates';
import ArchivedCandidates from './components/CandidatePages/ArchivedCandidates';
import InProgressCandidates from './components/CandidatePages/InProgressCandidates';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#757de8',
      dark: '#002984',
    },
    secondary: {
      main: '#f50057',
      light: '#ff5983',
      dark: '#bb002f',
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 6px rgba(0,0,0,0.07)',
    // ...rest of shadows
  ],
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className='app-container'>
          <NavBar />
          <div className="content-wrapper">
            <Sidebar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<OpenCandidates />} />
                <Route path="/open" element={<OpenCandidates />} />
                <Route path="/closed" element={<ClosedCandidates />} />
                <Route path="/potential" element={<PotentialCandidates />} />
                <Route path="/archived" element={<ArchivedCandidates />} />
                <Route path="/in-progress" element={<InProgressCandidates />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

