import './App.css';
import Button from './components/Button';
import CalculatorOutput from './components/CalculatorOutput';
import CalculatorWrapper from './components/CalculatorWrapper';
import ButtonWrapper from './components/ButtonWrapper';

  const btnValues = [
    ["C", "%", "/", "+-"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [".", 0, "="],
  ]
function App() {
  return (
    <div className="calculator-wrapper">
      <CalculatorWrapper>
        <CalculatorOutput />
        <ButtonWrapper>
          {btnValues.flat().map((btn, index) => (
            <Button
             vaue={btn}
             key={index} />
          ))}
        </ButtonWrapper>
      </CalculatorWrapper>
    </div>
  );
}

export default App;
