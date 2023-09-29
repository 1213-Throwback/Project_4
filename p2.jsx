import React from 'react';
import ReactDOM from 'react-dom';

import statesData from './components/states/States';
import States from './components/states/States';
//import * as constants from "constants";

ReactDOM.render(
  <States />,
  document.getElementById('reactapp'),
);

const StateFilter = () => {
    const[substring, setSubstring] = React.useState('');
    //^ This line helps manage the state of the entered substring
    const handleInputChange = (e) => {
        setSubstring(e.target.value.toLowerCase());
    };
    //^ This block of code updates the substring when new input is received

    const filteredStates  = statesData.filter((state) =>
    state.name.toLowerCase().includes(substring)
    );
    //^ This block of code filters the statesData array using the substring value

    //The code below is basically the render that you see in the Example.jsx
    //The code within the <ul> sections renders the unordered list or displays a error message is the substring does not match
    return(
        <div>
            <input
                type= "text"
                placeholder = "Enter substring"
                value = {substring}
                onChange = {handleInputChange}
            />
            <p>Filtering states for the substring: {substring}</p>
            <ul>
                {filteredStates.length > 0 ? (
                filteredStates.map((state) => (
                <li key ={state.id}>{state.name}</li>
                ))
                ) : (
                    <lil>No matching states found.</lil>
                )}
            </ul>

        </div>
    );
};

