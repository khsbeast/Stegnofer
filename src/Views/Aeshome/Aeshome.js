import React from 'react'
import Heading from '../../Components/Heading/Heading'
import Navbar from '../../Components/Navbar/Navbar'
import Box from '../../Components/Box/Box'
import './Aeshome.css'

function Aeshome() {
    return (
        <>
            <Navbar />
            <div id="box">
                <div id="homehead">
                    <Heading head="" />
                </div>
            </div>
            <div id="lower">
            <Box head="Encrypt" desc="Encrypt your secret image using AES" butt="Encrypt" loc="./encrypt"/>
            <Box head="Decrypt" desc="Decrypt your secret image using AES" butt="Decrypt" loc="./decrypt"/>
            </div>
        </>
    )
}

export default Aeshome
