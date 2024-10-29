// src/components/BarChartIcon.tsx
import React from 'react';

const BarChartIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            style={{ position: 'absolute', top: '50%', left: '70%', transform: 'translate(-50%, -50%)', opacity: 0.2 }}
        >
            {/* Bar chart representation with white fill */}
            <rect className="bar bar1" x="2" y="10" width="4" height="12" fill="#ffffff" />
            <rect className="bar bar2" x="8" y="6" width="4" height="16" fill="#ffffff" />
            <rect className="bar bar3" x="14" y="2" width="4" height="20" fill="#ffffff" />
            <rect className="bar bar4" x="20" y="8" width="4" height="14" fill="#ffffff" />
        </svg>
    );
};

export default BarChartIcon;
