import React from 'react';
import { Link } from 'react-router-dom';


export default function Home(){
    return (
        <div>
            <Link to='/bins/shelfA'><button>Shelf A</button></Link>
            <Link to='/bins/shelfB'><button>Shelf B</button></Link>
            <Link to='/bins/shelfC'><button>Shelf C</button></Link>
            <Link to='/bins/shelfD'><button>Shelf D</button></Link>
        </div>
    )
}