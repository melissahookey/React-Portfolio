import React from 'react';
// import profilePic from './assets/images/profile-pic.jpg'
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
                    insert bio
                    <br />
                    <br />
                    insert bio
                </p>
            </div>
        </div>
    )
}