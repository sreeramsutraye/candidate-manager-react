import './Sidebar.css'
import { useNavigate } from 'react-router-dom';

export default function Sidebar(){
  const sidebarOptions = [
    { label: 'Open', path: '/open' },
    { label: 'In Progress', path: '/in-progress' },
    { label: 'Closed', path: '/closed' },
    { label: 'Archive', path: '/archived' },
    { label: 'Potential', path: '/potential' },
  ];

    const navigate = useNavigate();

    return (
      <div
        className="sidebar-container"
        style={{
          backgroundColor: "#2f3f52",
          color: "white",
          position: "fixed",
          top: "60px",
          left: 0,
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          height: "calc(100vh - 60px)",
          width: "220px"
        }}
      >
        {sidebarOptions.map(option => (
          <div
            key={option.path}
            className="sidebar-options"
            onClick={() => navigate(option.path)}
          >
            {option.label}
          </div>
        ))}
      </div>
    );
  
}