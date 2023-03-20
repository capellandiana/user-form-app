import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
              title: 'Invalid input',
              message: 'USERNAME PLEASE!',
            });
            return;
        }// + is converting entered age to number
        if (+enteredAge < 1) {
            setError({
              title: 'Invalid age',
              message: 'Please enter age',
            });
            return;
          }
        console.log(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');

    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };


    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username:</label>
                <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
                <Button type='submit'>Add user</Button>
            </form>
        </Card>
    )
};

export default AddUser;