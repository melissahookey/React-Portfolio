import React from 'react';
import Aboutme from '../components/Aboutme';

export default function Start() {
  return (
    <>
        <Grid gap={4}>
            <GridItem>
                <Navbar />
            </GridItem>

            <GridItem>
                <Aboutme />
            </GridItem>

            <GridItem>
                <Projects />
            </GridItem>

            <GridItem>
                <Contact />
            </GridItem>

            <GridItem>
                <Footer />
            </GridItem>
        </Grid>
    </>
)}