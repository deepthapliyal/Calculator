import React, { useState } from "react";

const Mycalcu = (props) => {
  // Define state for the input value
  const [input, setInput] = useState("");

  // Handle input change
  const handleOnchange = (e) => {
    setInput(e.target.value);
  }

  // Handle backspace button
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  }

  // Handle reset button
  const handlereset = () => {
    setInput("")
  }

  // Handle calculation
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      alert("please Enter currect number " + error)
    }
  }

  // Handle decimal button
  const handleDecimal = () => {
    if (input.indexOf(".") === -1) {
      setInput(input + ".");
    }
  }

  // Define state for dark mode
  const [isdarkmodeon, isdarkmodeof] = useState(false);

  // Handle dark mode button
  const handledarkmode = () => {
    console.log("darkmode")
    isdarkmodeof(!isdarkmodeon)
  }

  return (

    <div className={`calculator ${isdarkmodeon ? 'dark-mode' : ""}`}>
      <div className="display">

        <input type="text" className={`input ${isdarkmodeon ? 'dark-mode2' : ""}`} value={input} onChange={handleOnchange} />

      </div>
      <div className="grid-container" >

        <button className={`black ${isdarkmodeon ? 'for-black' : ""}`} onClick={() => { handledarkmode(); props.onButtonClick() }}  > <span class="material-symbols-outlined" >
          {isdarkmodeon ? "dark_mode" : "light_mode"}
        </span></button>
        <button className={`black ${isdarkmodeon ? 'for-black' : ""}`} onClick={() => { props.onButtonClick() }} ><span class="material-symbols-outlined">
          percent
        </span></button>

        <button className={`black ${isdarkmodeon ? 'for-black' : ""}`} onClick={() => { handleBackspace(); props.onButtonClick() }}><span className="material-symbols-outlined">
          backspace
        </span></button>
        <button className={`black ${isdarkmodeon ? 'for-black' : ""}`} onClick={() => {
          setInput(input + "/"); props.onButtonClick(); props.onButtonClick();

        }}>/</button>
        <button className={` ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => { setInput(input + "7"); props.onButtonClick(); }}>7</button>
        <button className={` ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => {
          setInput(input + "8"); props.onButtonClick();;
        }}>8</button>
        <button className={` ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => { setInput(input + "9"); props.onButtonClick(); }}>9</button>
        <button className={` black ${isdarkmodeon ? 'for-black' : ""}`} onClick={() => { setInput(input + "*"); props.onButtonClick(); }}>*</button>
        <button className={`  ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => { setInput(input + "4"); props.onButtonClick(); }}>4</button>
        <button className={`  ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => { setInput(input + "5"); props.onButtonClick(); }}>5</button>
        <button className={`  ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => { setInput(input + "6"); props.onButtonClick(); }}>6</button>
        <button className={`black ${isdarkmodeon ? 'for-black' : ""}`} onClick={() => { setInput(input + "-"); props.onButtonClick(); }}>-</button>
        <button className={`  ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => { setInput(input + "1"); props.onButtonClick(); }}>1</button>
        <button className={` ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => { setInput(input + "2"); props.onButtonClick(); }}>2</button>
        <button className={`  ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => { setInput(input + "3"); props.onButtonClick(); }}>3</button>
        <button className={`black ${isdarkmodeon ? 'for-black' : ""}`} onClick={() => { setInput(input + "+"); props.onButtonClick(); }}>+</button>
        <button className={` ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => { setInput(input + "0"); props.onButtonClick(); }}>0</button>
        <button className={`b ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => { handleDecimal(); props.onButtonClick() }} >.</button>
        <button className={`  ${isdarkmodeon ? 'for-grey' : ""}`} onClick={() => { handlereset(); props.onButtonClick() }} ><span class="material-symbols-outlined">
          refresh
        </span></button>

        <button className={`enter  ${isdarkmodeon ? 'for-red' : ""}`} onClick={() => { handleCalculate(); props.onButtonClick() }} > =</button>
      </div>
    </div>
  );
};



export default Mycalcu;