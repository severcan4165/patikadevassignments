import React, {useState, useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  

    // const handleDecrease = () => {
    //     setCount(count - 1)
    // }
    useEffect(()=>{
      console.log("mounting started");

   const interbal = setInterval(() => {
        setCount((n)=>n+1);
      }, 1000);
      return ()=> clearInterval(interbal)
    },[])

    useEffect(()=>{
      console.log("mounting updated");

     
    }, [count])
   
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>İncrease</button>
       
        {/* <button onClick={handleDecrease}>Decrease</button> */}
    </div>
  )
}

export default Counter