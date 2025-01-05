import React, { useState } from 'react';
import BarChartIcon from './BarChartIcon'; // Import the updated icon component

type SidebarProps = {
    setPage: (page: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ setPage }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen); // Toggle the dropdown visibility
    };

    // Function to handle the page change and dropdown toggle
    const handleButtonClick = (page: string) => {
        setPage(page); // Set the page
        setDropdownOpen(false); // Optionally, close the dropdown when the page is set
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2 style={{ position: 'relative', color: '#d1d5db' }}>
                    <BarChartIcon className="bar-chart-icon" />
                    Discord Analytics
                </h2>
            </div>
            <ul>
                {/* Button for Axie Infinity with dropdown */}
                <li>
                    <button
                        onClick={() => {
                            handleButtonClick('Axie Infinity-2025.html'); // Set page and close dropdown if needed
                            handleDropdownToggle(); // Toggle dropdown visibility
                        }}
                    >
                        Axie Infinity
                    </button>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li>
                                <button onClick={() => handleButtonClick('Axie Infinity PH-2025.html')}>
                                    Axie PH
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleButtonClick('Axie Infinity PT-2025.html')}>
                                    Axie PT
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleButtonClick('Axie Infinity ES-2025.html')}>
                                    Axie ES
                                </button>
                            </li>
                        </ul>
                    )}
                </li>
                <li><button onClick={() => setPage('Apeiron-2025.html')}>Apeiron</button></li>
                <li><button onClick={() => setPage('⚡ CyberKongz ⚡-2025.html')}>CyberKongz</button></li>
                <li><button onClick={() => setPage('Forgotten Runes Wizard Cult-2025.html')}>Forgotten Runiverse</button></li>
                <li><button onClick={() => setPage('Fableborne-2025.html')}>Fableborne</button></li>
                <li><button onClick={() => setPage('Official Kaidro Channel-2025.html')}>Kaidro</button></li>
                <li><button onClick={() => setPage('Lumiterra-2025.html')}>Lumiterra</button></li>
                <li><button onClick={() => setPage('Moku-2025.html')}>Moku</button></li>
                <li><button onClick={() => setPage('Pixels-2025.html')}>Pixels</button></li>
                <li><button onClick={() => setPage('Pixel Heroes Adventure-2025.html')}>Pixel Heroes</button></li>
                <li><button onClick={() => setPage('PlayFightLeague-2025.html')}>Play Fight League</button></li>
                <li><button onClick={() => setPage('Ragnarok_ Monster World-2025.html')}>Ragnarok Montster World</button></li>
                <li><button onClick={() => setPage('Ronin Creator Discord-2025.html')}>Ronin Creator Discord</button></li>
                <li><button onClick={() => setPage('Ronin Network-2025.html')}>Ronin Network</button></li>
                <li><button onClick={() => setPage('The Machines Arena-2025.html')}>The Machines Arena</button></li>
                <li><button onClick={() => setPage('Wild Forest-2025.html')}>Wild Forest</button></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
