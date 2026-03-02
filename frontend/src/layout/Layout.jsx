import React from 'react'
import Header from '../Components/global/Header' 
import Footer from '../Components/global/Footer' 
import End from '../Components/global/End'
const Layout=({children})=>{
    return(
        <>
        <Header/>
        
        {children}
        
        <Footer/>
        <End/>
        </>
    )
}
export default Layout