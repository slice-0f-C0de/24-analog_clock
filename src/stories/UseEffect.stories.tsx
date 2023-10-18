import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)

    console.log("SimpleExample")

    useEffect(() => {
        console.log("UseEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("UseEffect only first render (component DidMount)")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("UseEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        {counter}
    </>
}

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    })

    return <>
        Hello, counter: {counter}
    </>
}