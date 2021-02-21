import React from 'react'
// import HeaderPic from ' ./HeaderPic.jsx'
import HeaderPic from './HeaderPic/Index'
import HeaderNav from './HeaderNav/Index'
import HeaderStuff from './HeaderStuff/Index'


const header = props =>

    <header className='col-lg-3'>
        <section>
            <HeaderPic  />
            <HeaderNav  handlers={props.events}/>
            <HeaderStuff />
        </section>
    </header>



export default header