// src/components/Sidebar.tsx
import React, { useState } from 'react';
import BarChartIcon from './BarChartIcon'; // Import the updated icon component

type SidebarProps = {
    setPage: (page: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ setPage }) => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

    const toggleSidebar = () => {
        setIsOpen(isOpen);
    };

    return (
        <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
            {/* Hamburger Menu Button for Mobile */}
            <button className="burger-menu" onClick={toggleSidebar}>
                ☰
            </button>
            
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2 style={{ position: 'relative', color: '#d1d5db' }}>
                        <BarChartIcon className="bar-chart-icon" /> {/* Updated Bar Chart Icon */}
                        Discord Analytics {/* Sidebar Title */}
                    </h2>
                </div>
                <ul>
                    <li><button onClick={() => setPage('Axie Infinity-2024.html')}>Axie Infinity</button></li>
                    <li><button onClick={() => setPage('Apeiron-2024.html')}>Apeiron</button></li>
                    <li><button onClick={() => setPage('⚡ CyberKongz ⚡-2024.html')}>CyberKongz</button></li>
                    <li><button onClick={() => setPage('Forgotten Runes Wizard Cult-2024.html')}>Forgotten Runiverse</button></li>
                    <li><button onClick={() => setPage('Fableborne-2024.html')}>Fableborne</button></li>
                    <li><button onClick={() => setPage('Official Kaidro Channel-2024.html')}>Kaidro</button></li>
                    <li><button onClick={() => setPage('Lumiterra-2024.html')}>Lumiterra</button></li>
                    <li><button onClick={() => setPage('Moku-2024.html')}>Moku</button></li>
                    <li><button onClick={() => setPage('Pixels-2024.html')}>Pixels</button></li>
                    <li><button onClick={() => setPage('Pixel Heroes Adventure-2024.html')}>Pixel Heroes</button></li>
                    <li><button onClick={() => setPage('PlayFightLeague-2024.html')}>Play Fight League</button></li>
                    <li><button onClick={() => setPage('Ragnarok_ Monster World-2024.html')}>Ragnarok Monster World</button></li>
                    <li><button onClick={() => setPage('Ronin Creator Discord-2024.html')}>Ronin Creator Discord</button></li>
                    <li><button onClick={() => setPage('Ronin Network-2024.html')}>Ronin Network</button></li>
                    <li><button onClick={() => setPage('The Machines Arena-2024.html')}>The Machines Arena</button></li>
                    <li><button onClick={() => setPage('Wild Forest-2024.html')}>Wild Forest</button></li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
