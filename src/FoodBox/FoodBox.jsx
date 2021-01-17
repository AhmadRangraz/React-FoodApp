import React , {Component} from 'react'
import './foodBox.css'

export default class FoodBox extends Component{


    render(){
        return(
            <div onClick={this.props.click} className = 'FoodBox flex'>
                <img src={this.props.src} alt={this.props.title}/>
                <h4>
                    {this.props.title}
                </h4>
            </div>
        )
    }
}
