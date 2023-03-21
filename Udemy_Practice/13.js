import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [clicked, setClicked] = React.useState(false)
    
    
    const clickHandler = () => {
        setClicked(isClicked => !isClicked)
        console.log('Clicked!');
    };
    
    return (
        <div>
          <h2>You're logged in!</h2>
          <p style={{color: clicked ? 'red' : 'white'}}>Welcome to your user profile!</p>
          <button onClick={clickHandler}>Click me!</button>
        </div>
    );
}