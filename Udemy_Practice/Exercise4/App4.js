import React from 'react';

import Product from './Product4';
import './styles.css';

// don't change the Component name "App"
export default function App() {
//     const products = [
//         {
//     Title: 'cat hamock',
//     Price: 10,
//     Description: 'meow'
// },
// {
//     Title: 'Catbed',
//     Price: 20,
//     Description: 'meowmewo'
// }
//     ]
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product title='cat hamock' price='10' description='meow'/>
            <Product title='cat toy' price='20' description='meowmeow'/>
        </div>
    );
}