import './App.css';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='app-container'>
      <div style={{display:"flex", flexDirection:"column"}}>
        <NavBar />
        <Sidebar />
      </div>
      
    </div>
  )
}

export default App
