import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    let navigate = useNavigate();
    const [expanded, setExpanded] = useState(true);
    const isExpanded = `navButton ${expanded ? "expanded" : ""}`;
    return (
        <div className="navbar">
            <button className={isExpanded} onClick={() => setExpanded(!expanded)}>
                |||
            </button>

            <button className={isExpanded} onClick={() => navigate('/')}>
                {expanded ? "Home" : "H"}
            </button>

            <button className={isExpanded} onClick={() => navigate('/projects')}>
                {expanded ? "Projects" : "P"}
            </button>
        </div>
    )
}
export default Navbar;