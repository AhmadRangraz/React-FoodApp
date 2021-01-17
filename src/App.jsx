import React, {
  Component
} from 'react'
import './App.css';
import FoodBox from './FoodBox/FoodBox.jsx'
import FoodDetail from './FoodDetail/FoodDetail.jsx'
import {Scrollbars} from 'react-custom-scrollbars'
import axios from 'axios'




export default class App extends Component {


  state = {
    data: [],
    foods: [],
    word: '',
    foodDetail: {},
    loading : true
  }
  style = {
    color: 'red',
    cursor: 'pointer'
  }
  saveTheWord = e => {
    this.setState({
      word: e.target.value
    })
  }
  
  searchForFood(query) {
   
    const header = {headers : {
      "Content-Type": "application/json"
    }}
    const key = 'apiKey=c35c3f2137a1449c949373e6f3ca17a4'
      axios.get(`https://api.spoonacular.com/recipes/complexSearch?${key}&query=${query}` , header)
      .then(res =>{
        this.setState({
          foods: res.data.results
        })
      }).catch(error =>{
        alert(error.response);
      })
  }
  async FoodDetails(id) {
    this.setState({
      loading : false
    })
    const header = {headers : {
      "Content-Type": "application/json"
    }}
    const key = 'apiKey=c35c3f2137a1449c949373e6f3ca17a4'
      axios.get(`https://api.spoonacular.com/recipes/${id}/information?${key}` , header) 
      .then(foodDetail =>{
        this.setState({
          foodDetail: foodDetail.data ,
          loading : true
        })
      })
      .catch(error =>{
        alert(error)
      })
      // console.log(this.state.loading);
  }

  render() {

    const {
      foodDetail
    } =this.state
    return (
      <main className='main bg-dark'>
{/* *********** food Recipes ********** */}
        <section className='foodRec'>
          <div className = 'cont flex'>
          <h2>
            Food Searching
          </h2>
          <div className='searchBox flex'>
            <input onChange={this.saveTheWord} type="text" />
            <button onClick={this.searchForFood.bind(this, this.state.word)}>
              Search
          </button>
          </div>
          </div>
      <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      autoHeight
      autoHeightMin={window.innerHeight - ((window.innerHeight/100) * 16) }
      >
      <div className = ' foods '>
          {this.state.foods.map(item => {
            return (
              <FoodBox
                click = {this.FoodDetails.bind(this , item.id)}
                title={item.title}
                src={item.image}
                key={item.id}
              />
            )
          })}
          </div>
      </Scrollbars>
        </section>
{/* ************ food Recipes ********* */}








{/* ****** *** food Details ********** */}
{/* <FoodDetail
title = 'food title'
price = '10'
vegetarian = {false}
healthScore = {32}
minute = {20}

/> */}
    <FoodDetail 
    image = {foodDetail.image}
    title = {foodDetail.title}
    price = {foodDetail.pricePerServing}
    vegetarian = {foodDetail.vegetarian}
    healthScore  = {foodDetail.healthScore}
    minute = {foodDetail.readyInMinutes}
    summary = {foodDetail.summary}
    loading = {this.state.loading}
    />
    

    {/* <p>
    dangerouslySetInnerHTML={{__html: this.state.foodDetail.summary}}
    </p> */}
{/* ****** *** food Details ********** */}









{/* ****** ordering ******** */}
{/* <section className='order flex'>
  <h2>
    Ordering Box
  </h2>
</section> */}
{/* ****** ordering ******** */}


      </main>
    )
  }
};