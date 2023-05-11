import React, { useState, useRef } from 'react'


export default function movie(props) {
    const stars = [];
    for (let index = 0; index < props.rating; index++) {
        stars.push(<img className='star' src={"/star.png"} alt="star" />);
    };

    return (
        <li className='list-group-item'>
            {props.title}
            {props.id}
            <button className='btn btn-sm btn-danger float-end' onClick={() => (props.deleteMovie(props.id))}>X</button>
            <div className='float-end'>{stars}</div>
        </li>

    );
}

