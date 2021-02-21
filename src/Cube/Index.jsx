import React from 'react'
import Home from '../components/Home/Index'
import About from '../components/About/Index'
import Resume from '../components/Resume/Index'
import Portfolio from '../components/Portfolio/Index'
import Blog from '../components/Blog/Index'
import Contact from '../components/Contact/Index'


const cube = props =>
<section className={props.class}>
<Home/>
<About />
<Resume />
<Portfolio />
<Blog />
<Contact />
</section>

export default cube