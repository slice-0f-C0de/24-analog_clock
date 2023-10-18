import React, {useState} from "react";

export default {
    title: "UseState demo"
}

function generateData() {
    console.log("generateData")
    return 1
}

export const Example1 = () => {
    console.log("Example1")

    const [counter, setCounter] = useState(0)

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}