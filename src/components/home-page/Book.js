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
    console.log(data.response.books.length);
    return (
        <div className='home-page'>
            <div className={'program-section'}>
                <text className={'program-title'} style={{marginBottom: 30}}>ALL BOOKS</text>
                <div className={'course-section'} style={{paddingTop:40}}>
                {data.response.books.map(data=>{
                    return <CourseItem data={data}/>
                })}
                </div>
            </div>
            <div id='footer'>
           <Footer/>
            </div>
        </div>
    )
}
