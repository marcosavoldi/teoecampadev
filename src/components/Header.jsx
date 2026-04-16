import React from 'react';
import logo from '../assets/logo.jpg';

const Header = ({ onLogoClick }) => {
  return (
    <header className="animate-fade" style={{ marginBottom: '40px' }}>
      <img 
        src={logo} 
        alt="Teo & Campa Profile" 
        onClick={onLogoClick}
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          transition: 'transform 0.2s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    </header>
  );
};

export default Header;
