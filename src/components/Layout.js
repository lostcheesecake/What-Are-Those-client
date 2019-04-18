import React from 'react'
import Footer from './Footer'

const Layout = props => (
  <div>
    <h1></h1>

    {props.children}

    <Footer />
  </div>
)

export default Layout
