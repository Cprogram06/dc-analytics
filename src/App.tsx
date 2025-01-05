// src/App.tsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

const App: React.FC = () => {
    const [page, setPage] = useState<string>('Axie Infinity-2025.html'); // Default to 'home.html'

    return (
        <div className="container">
            <Sidebar setPage={setPage} />
            <main className="content">
                <Content page={page} />
            </main>
        </div>
    );
};

export default App;
