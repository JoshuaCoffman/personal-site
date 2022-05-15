import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../../Images/home-alt.svg';
import expand from '../../Images/maximize-alt.svg';
import collapse from '../../Images/minimize.svg';
import work from '../../Images/work-alt.svg';


import './Navbar.css';

function Navbar() {
    let navigate = useNavigate();
    const [expanded, setExpanded] = useState(true);
    const isExpanded = `navButton ${expanded ? "expanded" : ""}`;
    return (
        <div className="navbar">
            <button className='navButton' onClick={() => setExpanded(!expanded)} data-testid="expandCollapseButton">
                {expanded ? <img src={collapse} /> : <img src={expand} />}
            </button>

            <button className={isExpanded} onClick={() => navigate('/')}>
                {expanded ? "Home" : <img src={homeIcon} />}
            </button>

            <button className={isExpanded} onClick={() => navigate('/projects')}>
                {expanded ? "Projects" : <img src={work} />}
            </button>

            <button className={isExpanded} onClick={() => navigate('/datascience')}>
                {expanded ? "Data Science" : <img src={work} />}
            </button>
        </div>
    )
}
export default Navbar;