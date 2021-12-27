import React from 'react'
import Heading from '../../Components/Heading/Heading'
import Navbar from '../../Components/Navbar/Navbar'
import Box from '../../Components/Box/Box'
import './Steghome.css'

function Steghome() {
    return (
        <>
            <Navbar />
            <div id="box">
                <div id="homehead">
                    <Heading head="" />
                </div>
            </div>
            <div id="lower">
            <Box head="HIDE" desc="Hide your data secretely into an image" butt="HIDE MESSAGE" loc="./hide"/>
            <Box head="FIND" desc="Find secret hidden data from an image" butt="FIND MESSAGE" loc="./see"/>
            </div>
        </>
    )
}

export default Steghome
