import {useRef, useEffect,  useState } from "react"

export default function Clicker({keyName, color, increment}) {



    const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0))

    const buttonRef = useRef()

    useEffect (() => {

        return () => {
            localStorage.removeItem(keyName)
        }
    }, [])

    useEffect (() => {
        localStorage.setItem(keyName, count)
    }, [count]
    )

    const buttonClick = () => {
        setCount(count + 1)
        increment()
    }

    
    return <div>
        <div>Clicks count {count}</div>
        <button ref={buttonRef} style={ {color: color }} onClick={buttonClick}>Click</button>
    </div>
}