import React from 'react'
import './Style.css'
function ContactUs()
{
    const contactclass={
        display:'flex',
        justifyContent:'center',
        alignItem:'center',
        fontSize:'30px',
        fontFamily:'Sofia, sans-serif',
        position:'relative',
        top:'12vh',
        color:'Gray'
    }
    
    return(
        <>
            <p style={contactclass}>ContactUs Page</p>
        </>
    )
}
export default ContactUs