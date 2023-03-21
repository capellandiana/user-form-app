import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [clicked, setClicked] = React.useState(false);
    
    function clickHandler() {
    setClicked(isClicked => !isClicked);
    }
    
    return (
        <div>
            <p style={{color: clicked ? 'red' : 'white'}}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}
