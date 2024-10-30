// src/components/Sidebar.tsx
import React from 'react';
import BarChartIcon from './BarChartIcon'; // Import the updated icon component

type SidebarProps = {
    setPage: (page: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ setPage }) => {
    return (
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
                <li><button onClick={() => setPage('CyberKongz-2024.html')}>CyberKongz</button></li>
                <li><button onClick={() => setPage('Kaidro-2024.html')}>Kaidro</button></li>
                <li><button onClick={() => setPage('Lumittera-2024.html')}>Lumittera</button></li>
                <li><button onClick={() => setPage('Moku-2024.html')}>Moku</button></li>
                <li><button onClick={() => setPage('Pixels-2024.html')}>Pixels</button></li>
                <li><button onClick={() => setPage('PixelsCreator-2024.html')}>Pixels Creator</button></li>
                <li><button onClick={() => setPage('PlayFightLeague-2024.html')}>Play Fight League</button></li>
                <li><button onClick={() => setPage('Ragmon-2024.html')}>Ragnarok Montster World</button></li>
                <li><button onClick={() => setPage('Ronin Creator Discord-2024.html')}>Ronin Creator Discord</button></li>
                <li><button onClick={() => setPage('Ronin Network-2024.html')}>Ronin Network</button></li>
                <li><button onClick={() => setPage('The Machines Arena-2024.html')}>The Machines Arena</button></li>
                <li><button onClick={() => setPage('Wild Forest-2024.html')}>Wild Forest</button></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
