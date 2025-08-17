import React, {useState} from "react";

export default function StateCom() {

    const [name, setName] = useState("guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName('Bob');
    }
    const incrementAge = () => {
        setAge(age+1);
    }
    const employedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set age</button>
            <p>isEmployed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={employedStatus}>status</button>
        </div>
    )
}