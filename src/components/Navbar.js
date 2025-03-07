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
    <nav  className="navbar">
        <Link to={'/'} style={styles.link}> Home </Link>
        <Link to={'/about'} style={styles.link}> About </Link>
        <Link to={'/projects'} style={styles.link}> Projects </Link>
        <Link to={'/contact'} style={styles.link}> Contact </Link>
    </nav>
  )
}

export default Navbar
