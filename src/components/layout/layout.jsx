import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
const Layout = (props) => {
 const {children} = props 
  return <>
    <Navbar/>
        {children}
    <Footer/>
  </>
}

export default Layout