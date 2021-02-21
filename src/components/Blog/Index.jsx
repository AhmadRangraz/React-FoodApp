import React from 'react'
import img1 from '../../img/blog/blog_post_1.jpg'
import img2 from '../../img/blog/blog_post_2.jpg'
import img3 from '../../img/blog/blog_post_3.jpg'

const blog = () =>
    <section className='blog p-5'>
        

        <h4>
            Blog
                        </h4>




        <section className="row">






            <div className="col-12  col-md-6">
                <div>

                    <div>
                        <a href="">Design</a>

                    </div>

                    <a href="">

                        <img src={img1} alt="First-Blog" />
                                    </a>

                                </div>



                    <div>
                        <span>
                            05 Mar 2020
                                    </span>
                        <h4>
                            <h6>Why I Switched to Sketch </h6>
                        </h4>
                    </div>



                </div>
                <div className="col-12  col-md-6">
                    <div>

                        <div>
                            <a href="">UI</a>

                        </div>

                        <a href="">

                            <img src={img2} alt="First-Blog" />
                                    </a>

                                </div>



                        <div>
                            <span>
                                23 Feb 2020 </span>
                            <h4>
                                <h6>Best Practices for Animated  </h6>
                            </h4>
                        </div>



                    </div>



                    <div className="col-12  col-md-6">
                        <div>

                            <div>
                                <a href="">Design</a>

                            </div>

                            <a href="">

                                <img src={img3} alt="First-Blog" />
                                    </a>

                                </div>



                            <div>
                                <span>
                                    06 Feb 2020
                                    </span>
                                <h4>
                                    <h6>Designing the Perfect Feature </h6>
                                </h4>
                            </div>



                            </div>



                        <div className="col-12  col-md-6">
                            <div>

                                <div>
                                    <a href="">UI</a>

                                </div>

                                <a href="">

                                    <img src={img1} alt="First-Blog" />
                                    </a>

                                </div>



                                <div>
                                    <span>
                                        07 Jan 2020
                                    </span>
                                    <h4>
                                        <h6>An Overview of E-Commerce </h6>
                                    </h4>
                                </div>



                            </div>




                        </section>


</section>



export default blog