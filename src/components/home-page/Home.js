import React from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Laptop from './../../assets/laptop.jpg'
import Chip from '@material-ui/core/Chip';
import { Button } from '@material-ui/core';
import CourseItem from './CourseItem';
import Footer from './Footer';
import {PostData} from './../PostData'
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useHistory} from 'react-router-dom'
import data from '../../utils/books'
import featuredBooks from '../../utils/featuredBooks';
export default function Home() {
    const matches = useMediaQuery('(min-width:768px)');
    const history = useHistory();
    return (
        <div className='home-page'>
            <div className={'page-slider'}>
                   <div className={'slide-item'}>
                       <a href='#development' style={{textDecorationLine:'none'}}>
                      <text >Featured Books</text>
                       </a>
                   </div>
                   <div className={'slide-item'}>
                       <a href='#analytics'  style={{textDecorationLine:'none'}}>
                      <text>Discounts</text>
                       </a>
                   </div>
                   {/* <div className={'slide-item'}>
                       <a href='#graphic'  style={{textDecorationLine:'none'}}>
                      <text>Graphic Designing</text>
                       </a>
                   </div> */}
                   <div className={'slide-item'}>
                       <a href='#footer'  style={{textDecorationLine:'none'}}>
                      <text>Social</text>
                       </a>
                   </div>
            </div>
            <div className={'carousel'}>
           <Carousel
            infiniteLoop={true}
            emulateTouch={true} 
            autoFocus={true}
            autoPlay={true}
            interval={4000} 
            showThumbs={false} 
            className={'slider'}
            swipeScrollTolerance={'100'} 
            stopOnHover={false}   
            useKeyboardArrows={true}    
            >
                {data.response.books.splice(3, 5).map((data) => {
                    return (
                        <div className='carousel-item' style={{height:'400px',backgroundColor: 'black'}}>
                            <div className={'img-item'}>
                            {/* <img alt='gege' height={!matches? '400px': null}  style={{opacity:'0.9'}} src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" /> */}
                            </div>
                            
                            <p className="legend" style={{opacity:1,display:'flex',flexDirection:'column',background:'none'}}>
                                <div style={{display:"flex",flexDirection:'column',justifyContent:'center'}}>
                                    <div className={`banner-image-${Math.floor(Math.random() * (5)) + 0}`}>
                                    </div>
                                    <div>
                                    <text style={{fontSize:'23px',fontWeight:'bold'}}>{data.title}</text>
                                    <br/>
                                    </div>
                                    <div style={{display:'flex',flexDirection:'column'}}>
                                        <text style={{fontSize:'18px'}}>{data.description.substring(0,70)}</text>
                                        <text style={{fontSize:'18px'}}>{data.description.substring(70,120)}...</text>
                                    </div>
                                </div>
                            </p>
                        </div>
                    )
                })}
            </Carousel>
            </div>
            <div className={'program-section'}>
                <text className={'program-title'}>FEATURED BOOKS</text>
                <div id='development' className={'program-heading'}>
                    <text>Available Books</text>
                </div>
                <div className={'course-section'}>
                {/* {PostData.Development.map(data=>{
                    return  <CourseItem data={data}/>
                })} */}
                {featuredBooks.books.map(data=>{
                    return <CourseItem data={data}/>
                })}
                {/* <CourseItem/> */}
                {/* </div>
                <div id='analytics' className={'program-heading'}>
                    <text>Analytics</text>
                </div>
                <div className={'course-section'}>
                {PostData.Analytics.map(data=>{
                    return  <CourseItem data={data}/>
                })} */}
                {/* <CourseItem/> */}
                </div>
                {/* <div id='graphic' className={'program-heading'}>
                    <text>Graphic Designing</text>
                </div>
                <div className={'course-section'}>
                {PostData.Development.map(data=>{
                    return  <CourseItem data={data}/>
                })}
                </div> */}
            </div>
            <div id='footer'>
           <Footer/>
            </div>
        </div>
    )
}
