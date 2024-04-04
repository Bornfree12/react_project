import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from 'react-router-dom'
import Banner from '../images/banner.jpg'
import '../styles/Homestyle.css'
const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${Banner})`}}>
          <div className='headercontainer'>
            <h1>NMIMS Canteen</h1>
            <p>Bookings available</p>
            <Link to = "/menu">
              <button>
                ORDER NOW
              </button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home