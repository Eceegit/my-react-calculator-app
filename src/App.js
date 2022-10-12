import { useEffect, useState } from 'react';
import {NumericFormat} from 'react-number-format';
import './App.css';

     
function App() {
  const [initialState, setInitialState] = useState("")
  const [currentState, setCurrentState] = useState("0")
  const [final, setFinalState] = useState("")
  const [inputState, setInputState] = useState()
  const [operator, setOperator] = useState(null)
  const [total, setTotal] = useState(false)

  //reset handler
  const reset = () => {
      setInitialState(null)
      setCurrentState("0")
      setInputState(null)
  }

  //PlusMinus handler 
  const plusMinus = () =>{

  }

  //percent handler
  const percent = () => {

  }

  //operations handler
  const operation = (e) =>{
    //to continue calc in background
    setTotal(false)
    setOperator(e.target.innerText)
    // if(currentState === "") return
    setInitialState(currentState)
    setInputState(currentState)
    setCurrentState(null)
    // if(initialState !== " ") {
    //   equalsBtn()
    // }else{
      // setInitialState(currentState)
      // setCurrentState("")
    //   console.log(e)
    // }
  }

  //equals handler
  const equalsBtn = (e) => {
      if(e?.target.innerText === "=") {
        setTotal(true)
      }

      let calc;
      switch (operator) {
        case "/":
          calc = String(parseFloat(initialState) / parseFloat(final)
          );
          break;
      
        case "+":
          calc = String(parseFloat(initialState) + parseFloat(final)
          );
          break;
        case "X":
          calc = String(parseFloat(initialState) * parseFloat(final)
          );
          break;
        case "-":
          calc = String(parseFloat(initialState) - parseFloat(final)
          );
          break; 
        default:
            return;
      }
      console.log(calc)
      // setInputState("see")
      setFinalState(calc)
      // setCurrentState("new")
  }

  //numberBtn handler
  const NumberBtn = (e) =>{
    //to avoid two dots
    if(currentState && currentState.includes(".") && e.target.innerText === ".") return
    if(final && final.includes(".") && e.target.innerText === ".") return
    

    //to set the equal to true to stop calculation 
    if(total){
      setInitialState("")
    }

    currentState ? setCurrentState(prev => prev + e.target.innerText) : setFinalState(prev => prev + e.target.innerText)
    // currentState ? setCurrentState(`${parseFloat(prev => prev + e.target.innerText)}`) : 
    // setFinalState(`${parseFloat(prev => prev + e.target.innerText)}`)
    //setting the total back to false to get ready for the next calc
    setTotal(false)
  };

  //set the effect, everytime the currentState changes
  useEffect(()=>{
    if(final !== null){
      setInputState(null)
    }
  }, [final])

  //set the effect, everytime the app loads
  // useEffect(()=>{
  //   setInputState("0")
  // }, [])
  // console.log(inputState, initialState, inputState !== " " || inputState === "0")
  console.log("inputState=", inputState, 
"initialState ", initialState, final, currentState
)
  return (
    <div className='calc-container'>
      <div className='calc-wrapper' >
        <div className='calc-screen'>
            {currentState !== null ? (<NumericFormat value={parseFloat(currentState)} displayType={'text'} thousandSeparator={true} />): 
              inputState !== null ? (<NumericFormat value={parseFloat(inputState)} displayType={'text'} thousandSeparator={true} />) :
              (<NumericFormat value={final} displayType={'text'} thousandSeparator={true} />) }
        {/* {currentState !== null ?  currentState: inputState !== null ? inputState : final} */}
          {/* {inputState !== " " || inputState === "0" ? (<NumericFormat value={inputState} displayType={"text"} thousandSeparator={true} />) : 
          (<NumericFormat value={initialState} displayType={'text'} thousandSeparator={true} />)} */}
        </div>

        <div className='calc-btn grey-btn' onClick={reset}>AC</div>
        <div className='calc-btn grey-btn' onClick={plusMinus}>+/-</div>
        <div className='calc-btn grey-btn' onClick={percent}>%</div>
        <div className='calc-btn orange-btn' onClick={operation}>/</div>
        <div className='calc-btn' onClick={NumberBtn}>7</div>
        <div className='calc-btn' onClick={NumberBtn}>8</div>
        <div className='calc-btn' onClick={NumberBtn}>9</div>
        <div className='calc-btn orange-btn' onClick={operation}>X</div>
        <div className='calc-btn' onClick={NumberBtn}>4</div>
        <div className='calc-btn' onClick={NumberBtn}>5</div>
        <div className='calc-btn' onClick={NumberBtn}>6</div>
        <div className='calc-btn orange-btn' onClick={operation}>-</div>
        <div className='calc-btn' onClick={NumberBtn}>1</div>
        <div className='calc-btn' onClick={NumberBtn}>2</div>
        <div className='calc-btn' onClick={NumberBtn}>3</div>
        <div className='calc-btn orange-btn' onClick={operation}>+</div>
        <div className='calc-btn zero-btn' onClick={NumberBtn}>0</div>
        <div className='calc-btn' onClick={NumberBtn}>.</div>
        <div className='calc-btn orange-btn' onClick={equalsBtn}>=</div>
      </div>
    </div>
  );
}

export default App;
