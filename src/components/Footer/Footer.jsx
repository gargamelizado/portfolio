import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: '#222',
      color: '#fff',
      textAlign: 'center',
      padding: '1.2rem 0',
      marginTop: '2rem',
      fontSize: '1rem',
      letterSpacing: '0.5px',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.04)'
    }}>
      © {new Date().getFullYear()} Marcelo | Portfólio Web Dev
    </footer>
  );
}
