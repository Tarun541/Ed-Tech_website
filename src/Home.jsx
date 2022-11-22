import React from 'react'
import "./index.css"
import image from './ed6.jpg';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <section>
            <div className="difscreens">

                <img src={image} class='iconDetails' />

                <blockquote class="blockquote">
                    <p class="mb-0">Improve your Knowledge by enrolling in <strong className='e-color'>Courses</strong> </p><br />
                    <footer class="blockquote-footer">We are the team of Talented Developers making courses</footer>

                    <div className="mt-3 d-flex " >
                        <NavLink to="/service" className="btn-get-started ">Get Started</NavLink>
                    </div>
                </blockquote>


            </div>
        </section >
    )
}

export default Home;