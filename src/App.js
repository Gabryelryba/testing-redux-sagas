import { useDispatch, useSelector } from 'react-redux';
import { requestData } from './modules/actions'
import './App.css';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const imgSource = useSelector((state) => state.url)

  useEffect(() => {
    console.log(imgSource)
  }, [imgSource])

  return (
    <div>
      <div>
        <img src={imgSource?.url} alt="imagem aleatoria"/>
      </div>
      <button type="button" onClick={() => dispatch(requestData())}>Get data</button>
    </div>
  );
}

export default App;
