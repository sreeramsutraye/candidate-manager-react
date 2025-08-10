import './NavBar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function NavBar(){
    return(
        <div className='navbar-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
            <div className='navbar-item'>
                Candidate manager
            </div>
            <div className='navbar-item'>
                <AccountCircleIcon className='navbar-icon' fontSize="large" />
            </div>
        </div>
    )
}