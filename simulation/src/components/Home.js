import React from 'react';
import { Link } from 'react-router-dom';


export default function Home(){
    return (
        <div>
            <Link to='/home/shelf_a'><button>Shelf A</button></Link>
            <Link to='/home/shelf_b'><button>Shelf B</button></Link>
            <Link to='/home/shelf_c'><button>Shelf C</button></Link>
            <Link to='/home/shelf_d'><button>Shelf D</button></Link>
        </div>
    )
}