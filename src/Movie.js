import React, { useState, useRef } from 'react'


export default function movie(props) {
    return ( 
        <div>
            <li className='list-group-item'>
            { props.title + props.rating}
        </li>
        </div>
       
     );
}

