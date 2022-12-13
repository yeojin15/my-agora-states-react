import './App.css';
import Discussions from './components/Discussions';
import Form from './components/Form'
import { useEffect, useState } from 'react';


function App() {
  const [discussion, setDiscussion] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/discussions')
      .then(res=>res.json())
      .then((data)=>{
        setDiscussion(data)
      },[])
      .catch(error=>console.error(error))
  })

  return (
    <div className="App">
      <h1>my agora states</h1>
      <Form />
      <Discussions discussions={discussion}/>
    </div>
  );
}

export default App;
