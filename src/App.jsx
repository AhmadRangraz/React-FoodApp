import React, {
  Component
} from 'react'
import './App.css';
import './css/changing-page-animation.css'
import './css/Home-ENG.css'
import './css/bootstrap.min.css'
// import './css/load'

import Header from './Header/Index'
import OverContainer from './Containers/OverContainer.jsx'
import Cube from './Cube/Index'
import HeaderContainer from './Containers/HeaderContainer.jsx'
import Bgi from './components/bgi/Index'
// import { Scrollbars } from 'react-custom-scrollbars'



export default class App extends Component {

  state ={
    bgStyle:{
      'transform':`translate(${0,0})`
    },
    cubeClasses:`cube`

  }



  bgMoveHandler = e =>{
    // console.log(e.pageX);
    let x = e.pageX
    let y = e.pageY
    this.setState({
    bgStyle:{
      
      transform:`translate(${x/35}px  , -${y/35}px)`
    }
    })
  }

  homeHandler = () =>{
    this.setState({
    cubeClasses:`cube change_home`
    })
  }

  aboutHandler = () =>{
    this.setState({
    cubeClasses:`cube change_about`
    })
  }

  resumeHandler = () =>{
    this.setState({
    cubeClasses:`cube change_resume`
    })
  }

  portfolioHandler = () =>{
    this.setState({
    cubeClasses:`cube change_portfolio`
    })
  }

  blogHandler = () =>{
    this.setState({
    cubeClasses:`cube change_blog`
    })
  }

  contactHandler = () =>{
    this.setState({
    cubeClasses:`cube change_contact`
    })
  }


  render() {

    let handlers = {
      home:this.homeHandler,
      about:this.aboutHandler,
      resume:this.resumeHandler,
      portfolio : this.portfolioHandler ,
      blog:this.blogHandler,
      contact:this.contactHandler
    }
    
    return (
      <main className='flex' onMouseMove={this.bgMoveHandler}>

        <Bgi style ={this.state.bgStyle}/>


        <HeaderContainer>
          <Header events={handlers} />


          <OverContainer>
            <Cube class={this.state.cubeClasses} />
          </OverContainer>


        </HeaderContainer>

      </main>
    )
  }
};