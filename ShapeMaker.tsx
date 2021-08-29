import React from "react"; 
import {useState} from "react"; 
import "./ShapeMaker.css"; 
// diameter is a variable
// setDiameter is a function 
function ShapeMaker() {
    const [diameter, setDiameter] = useState(0); 

    const [circle, setCircle] = useState(false); 

    let styles = {height: diameter, width: diameter, background: "blue"}; 

    return (
    <div>
        <label>
            <input type="number" onChange= {(event) => {
                    setDiameter(event.target.valueAsNumber); 
            }}/>

            Diameter 
        </label>
            <input type = "checkbox" onChange = {(event) => {setCircle(event.target.checked) }}
            />
            Circle ? 
        <div style = {styles} className ={circle ? "circle" : ""}></div>
    </div>
    ); 
}

export default ShapeMaker; 