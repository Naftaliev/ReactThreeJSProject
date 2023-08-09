import { useEffect,  useState } from "react"

export default function Clicker({keyName, color}) {

    console.log(keyName)

    const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0))

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
    }

    
    return <div>
        <div>Clicks count {count}</div>
        <button style={ {background: color }} onClick={buttonClick}>Click</button>
    </div>
}