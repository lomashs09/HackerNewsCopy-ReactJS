import React from 'react'
const logo = require('../../logo.png')
// import {Link } from 'react-router-dom';
function Header(){
    return (
        <header style ={headerStyle} >
            <img style = {logoStyle} alt = "this is logo" src ={logo}/>
            <h1>Hacker News</h1>
        </header>
    )
}
const headerStyle = {
    display:'flex',
    background: '#333',
    color:'#fff',
    textAlign:'center',
    padding:'0 10%'
}
const logoStyle = {
    marginRight:'10px',
    width:'40px',
    height:"60px",
    marginTop:'10px'
}

export default Header;