import React from 'react'
import Heading from '../../Components/Heading/Heading'
import Navbar from '../../Components/Navbar/Navbar'
import Box from '../../Components/Box/Box'
import './Home.css'

function Home() {
    return (
        <>
            <Navbar />
            <div id="box">
                <div id="homehead">
                    <Heading head="Welcome to Stegnofer" />
                </div>
            </div>
            <div id="lower">
            <Box head="AES" desc="Encrypt Your secret Image using AES algo" butt="AES ENC/DEC" loc="./aeshome"/>
            <Box head="Steganography" desc="Hide your data secretely into an image file" butt="STEGANOGRAPHY" loc="./steghome"/>
            </div>
        </>
    )
}

export default Home
