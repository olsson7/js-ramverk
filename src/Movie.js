import React, { useState, useRef } from 'react'


export default function movie(props) {
    const stars = [];
    for (let index = 0; index < props.rating; index++) {
        stars.push(<img src={"/star.png"} alt="star" style={{width: '25px', height: '25px', marginRight: '5px'}}/>);
    };

    return (
        <li className='list-group-item'>
            {props.title}
            <button className='btn btn-sm btn-danger float-end'>X</button>
            <div className='float-end'>{stars}</div>
        </li>

    );
}

