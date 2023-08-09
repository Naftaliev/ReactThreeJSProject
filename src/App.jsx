import Clicker from "./Clicker";
import { useState } from "react";

export default function App() {
    const [hasClicker, setHasClicker] = useState(true)
    console.log(hasClicker)

    const clickerSwitch = () => {
        setHasClicker(!hasClicker)
    }

    

    return <>
        {/* <Clicker></Clicker> */}
        {hasClicker &&  <>
        <Clicker keyName='countA' color='blue'></Clicker>
        <Clicker keyName='countB' color='red'></Clicker>
        <Clicker keyName='countC' color='green'></Clicker>
        </> }
        <br></br>
        <button onClick={clickerSwitch}> {hasClicker ? 'Hide' : 'Show' } Clicker </button>
    </>
}