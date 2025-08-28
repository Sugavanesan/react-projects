import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '1rem', backgroundColor: '#343a40', color: 'white', marginTop: 'auto' }}>
            <p className='text-center' >© {new Date().getFullYear()} My App. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
