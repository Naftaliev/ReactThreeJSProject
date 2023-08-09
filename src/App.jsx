import Clicker from "./Clicker";
import { useState } from "react";

export default function App() {
    const [hasClicker, setHasClicker] = useState(true)

    const clickerSwitch = () => {
        setHasClicker(!hasClicker)
    }

    

    return <>
        {/* <Clicker></Clicker> */}
        {hasClicker &&  <>
        <Clicker keyName='countA' color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}></Clicker>
        <Clicker keyName='countB' color='magenta'></Clicker>
        <Clicker keyName='countC' color='cyan'></Clicker>
        </> }
        <br></br>
        <button onClick={clickerSwitch}> {hasClicker ? 'Hide' : 'Show' } Clicker </button>
    </>
}