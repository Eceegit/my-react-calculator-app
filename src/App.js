import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import './App.css';

     
function App() {
  const [initialState, setInitialState] = useState("")
  const [currentState, setCurrentState] = useState("")
  const [inputState, setInputState] = useState("0")
  const [operator, setOperator] = useState(null)
  const [total, setTotal] = useState(false)

  //reset handler
  const reset = () => {
      setInitialState("")
      setCurrentState("")
      setInputState("0")
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
    if(currentState === "") return
    if(initialState !== " ") {
      equalsBtn()
    }else{
      setInitialState(currentState)
      setCurrentState("")
      console.log(e)
    }
  }

  //equals handler
  const equalsBtn = (e) => {
      if(e?.target.innerText === "=") {
        setTotal(true)
      }

      let calc
      switch (operator) {
        case "/":
          calc = String(parseFloat(initialState) / parseFloat(currentState)
          );
          break;
      
        case "+":
          calc = String(parseFloat(initialState) + parseFloat(currentState)
          );
          break;
        case "X":
          calc = String(parseFloat(initialState) * parseFloat(currentState)
          );
          break;
        case "-":
          calc = String(parseFloat(initialState) - parseFloat(currentState)
          );
          break; 
          default:
            return;
      }
      setInputState("")
      setInitialState(calc)
      setCurrentState("")
  }

  //numberBtn handler
  const NumberBtn = (e) =>{
    //to avoid two dots
    if(currentState.includes(".") && e.target.innerText === ".") return

    //to set the equal to true to stop calculation 
    if(total){
      setInitialState("")
    }

    currentState ? setCurrentState(prev => prev + e.target.innerText) : setCurrentState(e.target.innerText)
    //setting the total back to false to get ready for the next calc
    setTotal(false)
  };

  //set the effect, everytime the currentState changes
  useEffect(()=>{
    setInputState(currentState)
  }, [currentState])

  //set the effect, everytime the app loads
  useEffect(()=>{
    setInputState("0")
  }, [])

  return (
    <div className='calc-container'>
      <div className='calc-wrapper' >
        <div className='calc-screen'>
          {inputState !== " " || inputState === "0" ?
            // <NumericFormat value={inputState} displayType={'text'} thousandSeparator={true}/>) :(
            // <NumericFormat value={initialState} displayType={'text'} thousandSeparator={true}/>) }
  
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
