import {useState} from "react"
export default function Test(){
    const [userName, setUserName] = useState("john");
    const [userAge, setUserAge] = useState(24);
    const [userAddress, setUserAddress] = useState("Lig colony indore");
    const [userEmailId, setUserEmailId]= useState("vinitsolanki94@gmail.com");
    const [Count, setCount] = useState(0);
    
    let name= "smith";
    const changeName = () =>{
        name = "john smith";
        console.log(name);
        setUserName("hello john smith")
    }
    const increment = () =>{
        setCount(Count+1)

    }
    const decrement = () =>{
        setCount(Count-1)
    }
     

    return(
        <>
        <h1>Hello Test</h1>
        <h1>{userName}</h1>
        <h2>{userAge}</h2>
        <h2>{userAddress}</h2>
        <button onClick={changeName}>Change</button>
        <button onClick={increment}>Increment</button>
        <span>{Count}</span>
        <button onClick={decrement}>Decrement</button>

        </>
    )
}