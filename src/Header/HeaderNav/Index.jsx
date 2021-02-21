import React from 'react'

const HeaderNav = props => 
<nav>
<ul>

                            <li onClick={props.handlers.home} className="home-b">
                                <i className=" d-none d-lg-block lnr lnr-home"></i>
                                <span>Home</span>
                            </li>


                            <li onClick={props.handlers.about}  className="about-b">
                                <i className="d-none d-lg-block lnr lnr-user"></i>
                                <span>About</span>

                            </li>

                            <li onClick={props.handlers.resume}  className="resume-b">
                                <i className=" d-none d-lg-block lnr lnr-graduation-hat"></i>
                                <span>Resume</span>

                            </li>

                            <li  onClick={props.handlers.portfolio} className="portfolio-b">
                                <i className="d-none d-lg-block lnr lnr-briefcase"></i>
                                <span>Portfolio</span>

                            </li>

                            <li onClick={props.handlers.blog} className="blog-b">
                                <i className="d-none d-lg-block lnr lnr-book"></i>
                                <span>Blog</span>

                            </li>

                            <li onClick={props.handlers.contact} className="contact-b">
                                <i className=" d-none d-lg-block lnr lnr-envelope contact_change"></i>
                                <span>Contact</span>

                            </li>
                        </ul>
</nav>


export default HeaderNav