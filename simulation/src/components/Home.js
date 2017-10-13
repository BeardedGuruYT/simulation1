import React from 'react';
import ShelfA from './ShelfA';
import ShelfB from './ShelfB';
import ShelfC from './ShelfC';
import ShelfD from './ShelfD';

export default function Home(){
    return (
        <div>
            <p>this is Home page</p>
            {ShelfA}
            {ShelfB}
            {ShelfC}
            {ShelfD}
        </div>
    )
}