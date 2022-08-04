import { useState } from "react";
import React from "react";


export default function Form(props) {
    let funup = () => {
        // newInput = inpu.toUpperCase
        // newInput("reseted text")
        // newInput(even.target.value)
        // console.log("newInput " + inpu);
        // let email = document.getElementById("exampleFormControlInput1");
        // newInput(email.value + " => " + document.getElementById("exampleFormControlTextarea1").value.toUpperCase());
        newInput(document.getElementById("exampleFormControlTextarea1").value.toUpperCase());
        // let ansText = inpu.toUpperCase();
        // newInput(ansText)
        // console.log(email.value + " => " + inpu.toUpperCase());
        // console.log(inpu.toUpperCase());
        props.alert("converted to upper Case", "success")

    }
    let funlo = () => {
        newInput(document.getElementById("exampleFormControlTextarea1").value.toLowerCase());
        props.alert("converted to lower Case", "success")

    }
    let handleOnChange = (event) => {
        let detInpu = document.getElementById("detInpu");
        detInpu.textContent = `${inpu.length} characters and ${inpu.split(" ").filter((element) => { return element.length !== 0 }).length} words`
        // console.log("abe reset kyo kiya");
        // console.log(inpu.length)
        newInput(event.target.value)
        // detInpu.value = `${inpu.length + 1} characters and ${inpu.split(" ").length} words`
        if (event.target.value === "") {
            detInpu.textContent = `0 characters and 0 words`
        }
    }
    let detInpu = document.getElementById("detInpu");
    let clear = () => {
        newInput("")
        detInpu.value = `0 characters and 0 words`
        props.alert("cleared", "succes")
    }
    let [inpu, newInput] = useState("");

    // const [stl, newStl] = useState({
    //     // border: ' 2px solid blue'
    //     color: "black",
    //     backgroundColor: "white"
    // })

    // let toggle = () => {
    //     if (stl.color === "black") {
    //         newStl({
    //             color: 'white',
    //             backgroundColor: "black"
    //         })
    //         document.getElementById("btn").innerText = "light"
    //     }
    //     else {
    //         newStl({
    //             color: 'black',
    //             backgroundColor: "white"
    //         })
    //         document.getElementById("btn").innerText = "dark"

    //     }
    // }
    let copy = () => {
        // inpu.select();
        navigator.clipboard.writeText(inpu);
        props.alert("copied", "succes")
    }

    return (
        <>
            {/* <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div> */}
            <div className="mb-3 container">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color: props.color }}>Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="5" value={inpu} ></textarea>
                <button disabled={inpu.length === 0} type="button" onClick={funup} className="btn btn-primary mx-3">change to upper case</button>
                <button disabled={inpu.length === 0} type="button" onClick={funlo} className="btn btn-primary mx-3">change to lower case</button>
                <button disabled={inpu.length === 0} type="button" onClick={clear} className="btn btn-primary mx-3">clear</button>
                {/* <button type="button" onClick={toggle} className="btn btn-primary mx-3" id="btn">toggle</button> */}
                <button disabled={inpu.length === 0} type="button" onClick={copy} className="btn btn-primary mx-3">copy</button>
            </div>

            <div className="container">
                <h1 id="h1">text details</h1>
                <div className="input-group" >
                    <p className="input-group-text" style={{ color: props.color, backgroundColor: props.bgcolor }}>length</p>
                    <p className="form-control" aria-label="With textarea" id="detInpu" style={{ color: props.color, backgroundColor: props.bgcolor }}></p>
                    {/* <button type="button" onClick={detail} className="btn btn-primary">change to upper case</button> */}
                </div>

            </div>
        </>
    )
}