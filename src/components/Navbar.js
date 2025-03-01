import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
    navbar : {
        display :"flex",
        justifyContent : "center",
        gap : "20px",
        padding : "10px",
        backgroundColor : "#007BFF"
    },
    link : {
        color : "white",
        textDecoration : "none",
        fontSize : "1.2rem"
    }
}

function Navbar() {
  return (
    <nav style={styles.navbar}>
        <Link to={'/'} style={styles.link}> Home </Link>
        <Link to={'/about'} style={styles.link}> About </Link>
    </nav>
  )
}

export default Navbar
