import './Sidebar.css'

export default function Sidebar(){
  return(
    <div className="sidebar-container" style={{
      backgroundColor: "#2f3f52",
      color:"white",
      position: "fixed",
      top: "60px", // Add offset equal to navbar height
      left: 0,
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      height: "calc(100vh - 60px)", // Adjust height to account for navbar
      width: "220px"
    }}>
      <div className='sidebar-options'>Open</div>
      <div className='sidebar-options'>In Progress</div>
      <div className='sidebar-options'>Closed</div>
      <div className='sidebar-options'>Archive</div>
      <div className='sidebar-options'>Potential</div>
    </div>
  )
}