import { useState } from "react";

let ClockTime = ()=>{
   
    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleDateString();

    const [cTime, setcTime] = useState(time)

    const updateTime = () =>{
        time = new Date().toLocaleTimeString()
        setcTime(time);
    }

    setInterval(updateTime, 1000)

    function curTime() {
        return  new Date().toLocaleTimeString()
        console.log()
    }
    
    
    


    return(
        <p>This is the current time : {date} - {curTime()} </p>
    )
}

export default ClockTime;