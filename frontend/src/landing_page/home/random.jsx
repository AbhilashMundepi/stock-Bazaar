import React, {use, useState} from "react";


export default function CounterContainer() {


    const[ count , setCount] = useState(0);
  

    const handleClick = () =>{
          setCount(count+1);
    }

    const reset = () =>{
        setCount(0);
    }
    

    return(
        <>
       <p>you have clicked this button {count} times  </p> 
      <Counter click = {handleClick} new ={reset}/>
      </>

    )
}


function Counter(props) {

    


    return(
        <>
    <button onClick={props.click}>click</button>
     <button onClick={props.new}>Reset</button>
        </>
     
    )
}