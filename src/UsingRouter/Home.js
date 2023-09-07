import React from 'react'

function Home()
{
    const homeclass={
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
            <p style={homeclass}>Home Page</p>
        </>
    )
}
export default Home