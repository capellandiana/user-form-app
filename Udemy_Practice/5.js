import React from 'react';

// don't change the Component name "App"
export default function App() {
    const clickHandler = () => {
        console.log('stored')
    }
    return <button onClick={clickHandler}>Bookmark</button>;
}

