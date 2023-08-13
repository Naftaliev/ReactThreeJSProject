import Clicker from "./Clicker";
import People from './People';
import {  useState, useMemo } from "react";

export default function App({children, clickersCount}) {

    const [hasClicker, setHasClicker] = useState(true) 
    const clickerSwitch = () => {
        setHasClicker(!hasClicker)
    }

    const [ count, setCount ] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    
    const colors = useMemo(() => {

        const colors = []

        for(let i = 0; i < clickersCount; i++) 
        colors.push(`hsl(${Math.random() * 360}deg, 100%, 70%)`)

        return colors
    }, [clickersCount])

    return <>

        { children }

        <div>Total count: {count}</div>

        {/* <Clicker></Clicker> */}
        {hasClicker &&  <>
        {[...Array(clickersCount)].map((value, index) =>  
        <Clicker 
        key = {index}
        increment={increment} 
        keyName = { `count${index}` }
        color = { colors[index]} />
        ) }
        
        </> }
        <br></br>
        <button onClick={clickerSwitch}> {hasClicker ? 'Hide' : 'Show' } Clicker </button>
   
        <People/>
    </>
}