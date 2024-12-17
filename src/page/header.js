import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons


function Header({ darkMode, toggleTheme }) {

    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <header className={`App-header ${isScrolled && 'App-header-scrolled'}`}>
            <div className="header-content">
                <h1>My Portfolio</h1>
                <button 
                  className='color-button' onClick={toggleTheme}>
                  <FontAwesomeIcon icon={darkMode ? faMoon : faSun} style={{ marginRight: '8px' }} />
                  Mode
                </button>
            </div>
        </header>
    );
}

export default Header;
