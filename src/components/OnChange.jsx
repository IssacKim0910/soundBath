import React, {useState} from "react";

export default function OnChange() {

    const [name, setName] = useState("bob");
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: 'mustang'
    })

    function handleCarChange(evt) {
        const { name, value } = evt.target;
        setCar(c => ({ ...c, [name]: value }));
    }

    function handleNameChange(evt) {
        setName(evt.target.value);
    }
    function handleYearChange(evt) {
        setCar(c => ({...c, year: evt.target.value}));
    }
    return (
        <div>
            <input className="text-black" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <p>My favorite car is {car.year} {car.make} {car.model}</p>

            <input className="text-black" type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input className="text-black" type="text" value={car.make}/><br/>
            <input className="text-black" type="text" value={car.model} onChange={handleNameChange}/><br/>

        </div>
    )
}