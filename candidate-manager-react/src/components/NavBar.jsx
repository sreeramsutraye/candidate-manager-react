import './NavBar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate()
    return (
        <div className='navbar-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
            <div className='navbar-item' onClick={() => {
                navigate("/");
            }}>
                Candidate manager
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div
                    className='navbar-item-users'
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Users
                </div>
                <div className='navbar-item'>
                    <AccountCircleIcon className='navbar-icon' fontSize="large" />
                </div>
            </div>
        </div>
    )
}