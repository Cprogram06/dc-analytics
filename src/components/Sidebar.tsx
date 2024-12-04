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
                            handleButtonClick('Axie Infinity-2024.html'); // Set page and close dropdown if needed
                            handleDropdownToggle(); // Toggle dropdown visibility
                        }}
                    >
                        Axie Infinity
                    </button>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li>
                                <button onClick={() => handleButtonClick('Axie Infinity-2024.html')}>
                                    Axie Infinity Main
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleButtonClick('Axie Infinity PH-2024.html')}>
                                    Axie PH
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleButtonClick('Axie Infinity PT-2024.html')}>
                                    Axie PT
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleButtonClick('Axie Infinity ES-2024.html')}>
                                    Axie ES
                                </button>
                            </li>
                        </ul>
                    )}
                </li>
                {/* Other sidebar items */}
                <li>
                    <button onClick={() => setPage('Apeiron-2024.html')}>Apeiron</button>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
