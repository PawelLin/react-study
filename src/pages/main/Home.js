import React from 'react'
import './Home.css'
import Clock from './Clock'
import SideMenu from './SideMenu'
// import Content from './Content'
import Product from '../product/Index'

function Home () {
    return (
        <div id="home">
            <header>
                <span>css布局</span>
                <Clock />
                <Clock />
                <Clock />
                <Clock />
                <Clock />
            </header>
            <div id="container">
                <SideMenu />
                {/* <Content /> */}
                {<Product/>}
            </div>
        </div>
    )
}

export default Home