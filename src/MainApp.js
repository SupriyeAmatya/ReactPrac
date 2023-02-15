import { Button } from "bootstrap";
import { useState } from "react";
import "./mainApp.css";

function MainApp() {

    const [inputData, setInput] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");
    const [data, setData] = useState(0);
    const increaseCounter = () => {
        setData(previousData => previousData + 1)

    }
    const decreaseCounter = () => {

        //setData((previousData) =>{return previousData - 1})
        const a = (previousData) => { return previousData - 1 }
        setData(a)

    }
    const reset = () => {

        setData(0)
    }

    const inputChangeHandler = (event) => {

        console.log(event.target.value);
        const value = event.target.value
        setInput(value)

    }
    const submittedValueHandler = () => {
        setSubmittedValue(inputData)

    }

    const resetSubmitHandler = () => {
        setInput("")
        setSubmittedValue("")
    }



    return (
        <>

            <div className="py-6 w-[100%]">
                <h1 className=" abc flex justify-center text-[#b603fc]">Profile</h1>
            </div>
           
         

                <h2 className=" abc flex justify-center text-[#b603fc]">Supriye Amatya</h2>
                {/* 
        <span class="button_wrapper">

        <button onClick={increaseCounter}>increase</button>
        <button onClick={decreaseCounter}>decrease</button>
        <button onClick={reset}>reset</button>
        
        </span> */}



                <span id="input_wrapper">

                    <input value={inputData} onChange={inputChangeHandler} />

                </span>


                <button onClick={submittedValueHandler}>submit</button>

                <p>submittedValue {submittedValue}</p>

                <button className=" border border-teal-500 text-[#b603fc]" onClick={resetSubmitHandler}>reset submit</button>
            
            
        </>
    )


}

export default MainApp;
