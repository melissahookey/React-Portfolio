import React from 'react';
// import githubLogo from './assets/images/logo-github.png';
// import linkedInLogo from './assets/images/logo-linkedin.png'
import { 
    Button 
} from 'react-bootstrap';
import './style.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='is-flex is-justify-content-center'>
                <ul>
                    <li className='is-inline-flex mr-4'>
                        <a href='https://github.com/melissahookey' rel="noreferrer" target='_blank'>
                            {/* <img src={githubLogo} alt='Github logo'></img> */}
                        </a>
                    </li>
                    <li className='is-inline-flex mr-4'>
                        <a href='https://www.linkedin.com/in/melissahookey' rel="noreferrer" target='_blank'>
                            {/* <img src={linkedInLogo} alt='Linked In logo'></img> */}
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
