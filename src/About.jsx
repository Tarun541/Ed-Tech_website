import React from 'react'
import "./index.css"
import image from './ed2.png';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section>
                <div className="difscreens">

                    <img src={image} class='iconDetails' />

                    <blockquote class="blockquote">

                        <p class="mb-0">Get Specialization from this <strong className='e-color'>ED-Tech</strong> Website</p><br />
                        <footer class="blockquote-footer">We are the team of Talented Developers making courses at affordable prices.
                            Our goal is to help students to grab knowledge of trending Technologies</footer>
                        <div className="mt-3 d-flex " >
                            <NavLink to="/contact" className="btn-get-started ">Contact Us</NavLink>
                        </div><br />

                        <p>
                            <ul>
                                <p><strong>Mentors</strong></p>
                                <li>Sri Ramula</li>
                                <li>Govardhan</li>
                                <li>Chari Varma</li>
                                <li>Mukund</li>
                            </ul>
                        </p>



                    </blockquote>





                </div>
            </section >
        </>
    )
}

export default About

