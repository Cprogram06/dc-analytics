// src/components/Content.tsx
import React from 'react';

type ContentProps = {
    page: string;
};

const Content: React.FC<ContentProps> = ({ page }) => {
    return (
        <div className="content">
            <iframe
                src={`/${page}`}
                title="content"
            />
        </div>
    );
};

export default Content;
