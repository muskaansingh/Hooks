import React, {useState} from 'react';

function HookCounter2(props) {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            <h1>HookCounter2</h1>
            <h3>Count: {count}</h3>
           <button onClick={() => setCount(initialCount)}>Reset</button>
           <button onClick={() => setCount(count + 1)}>Increment</button> 
           <button onClick={() => setCount(count - 1)}>Decrement</button> 
        </div>
    );
}

export default HookCounter2;