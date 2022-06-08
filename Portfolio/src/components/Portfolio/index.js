import React, { useState } from 'react';
import Aboutme from '../Aboutme/index.js';
import Contact from '../Contact/index.js';
import Navbar from '../Navbar/index.js';
import Footer from '../Footer/index.js';
import Projects from '../Projects/index.js';
import './index.js';

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <Aboutme />
        }

        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }

        if (currentPage === 'Contact') {
            return <Contact />
        }

        // if (currentPage === 'Resume') {
        //     return <Resume />
        // }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    return (
        <div className='is-flex is-flex-direction-column is-fullheight'>
            <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
            <section className='section'>
                {renderPage()}
            </section>
        </div>
    );
}