import { useDispatch, useSelector } from 'react-redux';
import { requestData } from './modules/actions'
import './App.css';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const joke = useSelector((state) => state.joke)

  useEffect(() => {
    console.log(joke)
  }, [joke])

  return (
    <div>
      <div>
        <p>{joke}</p>
      </div>
      <button type="button" onClick={() => dispatch(requestData())}>Get data</button>
    </div>
  );
}

export default App;
