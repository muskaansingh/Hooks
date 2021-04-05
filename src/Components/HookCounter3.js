import React, {useState, useEffect} from 'react';

function HookCounter3() {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        document.title = `You Clicked ${count} times`
    });

    return (
        <div>
            <h1>ClassCounter3</h1>
            <button onClick = {() => setCount(count+1)}> You Clicked {count} times</button>
            <br/>
            <br/>
            Title also varies with the button click (using HOOKS)!
        </div>
    );
}

export default HookCounter3;