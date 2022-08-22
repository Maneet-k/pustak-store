import React from 'react'
import Laptop from './../../assets/laptop.jpg'
import Chip from '@material-ui/core/Chip';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function CourseItem(props) {
    const matches = useMediaQuery('(min-width:768px)');

    return (
        <div className={'course-card'}>
        <img src={props.data.cover} alt={`${props.data?.title.substring(0,5)}`}/>
        <text className={'course-title'}>{props.data?.title}</text>
        <div className={'course-heading'}>
        <text>Description</text>
        <br/>
        <text className={'course-title'} style={{fontSize: 12, lineHeight: 1}}>{props.data?.description.substring(0,100)}</text>
     </div>
        <div className={'course-buttons'}>
            <Link to={{pathname: `/books/${props.data.id}`, data: props.data}} style={{marginInline:'5px',textDecorationLine:'none',width:'100%'}}>
                <Button variant='contained' size={matches? 'medium':'small'} fullWidth color="primary">Read More</Button>
            </Link>
        </div>
     </div>
    )
}
