import React from 'react';

const Logo = () => {
    return (
        <div>
            <div className="logo">
                {/* Attention les images importées depuis la balise img sont accessibles dans "public" */}
                <img src="./logo192.png" alt="logo react" />
                <h1>React World</h1>

            </div>
        </div>
    );
};

export default Logo;