import React from 'react'
import Laptop from './../../assets/laptop.jpg'
import {Link, useHistory} from 'react-router-dom'
export default function ProgramItem(props) {
    const history = useHistory();
    return (
        <div className={'program-item'} onClick={()=>history.push(`/course/${props.data.link}`)}> 
            <img src={props.data.image}/>
            <text>{props.data.title}</text>    
        </div>
    )
}
