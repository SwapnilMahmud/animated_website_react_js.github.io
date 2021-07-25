import React from 'react'
import Common from './Common'
import web from "../src/images/se.gif"
const About = () => {
    return (
        <div>
           
            <Common 
            name='welcome to About page'
            imgsrc={web}
            visit="/contact"
            btname="Contact Now"
            />
        </div>
    )
}

export default About
