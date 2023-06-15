import { useEffect, useState } from 'react';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import './styles/global.scss'

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      clearInterval(timer)
    };
  }, [timer]);


  const startTimer = () => {
    setTimer(setInterval(async () => {
      setTime(prevValue => prevValue + 1)
    }, 1))
  }



  return (
    <div className="App">
      <Timer time={time} />
      <Button clickHandler={startTimer} >START</Button>
      <Button clickHandler={() => clearInterval(timer)}>STOP</Button>
      <Button clickHandler={() => setTime(0)}>RESET</Button>
    </div>
  );
}

export default App;
