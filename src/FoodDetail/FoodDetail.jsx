import React, { Component } from 'react'
import './foodDetail.css'
import { Scrollbars } from 'react-custom-scrollbars'
import { Markup } from 'interweave';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export default class FoodDetail extends Component {
    render() {
        return (
            <>

                <section className='foodDetails flex'>
                    <h2>
                        Food Details
                    </h2>

                    {this.props.loading ?
                        <Scrollbars
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                            autoHeight
                            autoHeightMin={window.innerHeight - ((window.innerHeight / 100) * 12)}
                        >
                            <figure className='flex'>
                                <img src={this.props.image} alt={this.props.title} />
                                <figcaption>
                                    {this.props.title}
                                </figcaption>
                            </figure>
                            <div className='littleInfo'>
                                <ul className=' flex'>


                                    {this.props.price !== undefined && <li>
                                        price:
                            ${this.props.price}
                                    </li>}


                                    {this.props.vegetarian !== undefined && <li>
                                        {this.props.vegetarian ? ' vegetarian' : 'not vegetarian'}
                                    </li>}


                                    {this.props.healthScore !== undefined && <li>
                                        score :      {this.props.healthScore}
                                    </li>}

                                    {this.props.minute !== undefined && <li>
                                        ready in {this.props.minute} minute's
                            </li>
                                    }


                                </ul>
                            </div>

                            <div className='summary'>

                                <Markup content={this.props.summary} />
                            </div>
                        </Scrollbars>
                        :
                        <div>
                            <Loader />
                        </div>
                    }


                    <p className='creator flex'>
                        created by :     <h1>Ahmad Rangraz</h1>
                        <div>
                            api <a href='https://spoonacular.com/'> spoonacular</a>
                        </div>
                    </p>
                </section>

            </>
        )
    }
}