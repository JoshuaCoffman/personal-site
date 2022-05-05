import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    let navigate = useNavigate();
    const [expanded, setExpanded] = useState(true);
    return (
        <div className={`navbar ${expanded ? "expanded" : ""}`}>
            <button onClick={() => setExpanded(!expanded)}>
                |||
            </button>

            <button onClick={() => navigate('/')}>
                {expanded ? "Home" : "H"}
            </button>

            <button onClick={() => navigate('/projects')}>
                {expanded ? "Projects" : "P"}
            </button>
        </div>
    )
}
export default Navbar;