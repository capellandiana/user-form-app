import React from 'react';

import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
    'Pet my Cats',
    'Study for interviews',
    'Sabotage Andres'
];

// don't change the Component name "App"
export default function App() {
    return (
        <ul>
          {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
        </ul>
    );
}
