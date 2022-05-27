import React, { useContext } from 'react';
import { counterContext } from '../counterContext';

const Counter2 = () => {
    const { minus10, counter2, plus10 } = useContext(counterContext)
    console.log(minus10);
    console.log(plus10);
    console.log(counter2);
    return (
        <div>
            <button onClick={() => minus10()}>-10</button>
            <h1>Counter: {counter2}</h1>
            <button onClick={() => plus10()}>+10</button>
        </div>
    );
};

export default Counter2;