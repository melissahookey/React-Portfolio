import React from 'react';
// import profilePic from './assets/images/profile-pic.jpg'
import {
    Box,
  } from '@chakra-ui/react';
import './style.css';

export default function AboutMe() {
    return (
        <div className='container'>
            <div className='content is-large'>
                <h1 className='is-size-2'>
                    About me
                </h1>
                <figure className='image is-128x128 ml-5'>
                    {/* <img className='is-rounded' src={profilePic} alt='My profile pic' /> */}
                </figure>
                <p className='has-text-justified'>
                Full stack developer and graphic designer with the ability to learn and collaborate in fast-paced environments. Equipped with a diverse and promising skillset. Proficient in many technologies and passionate about beautiful and accessible web design.
                </p>
            </div>
        </div>
    )
}