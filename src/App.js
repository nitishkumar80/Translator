import axios from 'axios';
import './App.css';
import video from './Gluehlampen1.mp4';
import {useEffect, useState} from 'react';
// const axios = require('axios');
function App() {
  const [options , setOptions] = useState([])

const [to , setTo] = useState("en");
const [from , setFrom] = useState("en");
const [output , setOutput] = useState("");
const [input , setInput] = useState("");


useEffect(()=>{


  axios.get('https://libretranslate.com/languages',
  
  { headers:{'accept':'application/json'}})
  .then(res=>{

    console.log(res.data);
    setOptions(res.data);
  })
},[])


const translate = ()=>{

const params = new URLSearchParams();
params.append('q', input);
params.append('source' , from);
params.append('target' , to);
params.append('api_key' , 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');




axios.post('https://libretranslate.de/translate',params,
  { headers: {'accept':'application/json',
'Content-Type':'application/x-www-form-urlencoded'
},
}).then(res => {
  // Handle the translation response here and set the output state
 
  console.log(res.data)
  setOutput(res.data.translatedText)
  
})


};



  return (
    <div className="App">
      <video className='videoTag' autoPlay loop muted>
    <source src={video} type='Gluehlampen1.mp4' />
</video>
<div>
  <h1>Translator</h1>
</div>
      from : ({from})
      <select onChange={e=>setFrom(e.target.value)}>
       {options.map(opt=> <option key={opt.code} value={opt.code}>{opt.name}</option> )}

      </select>

       To :({to})
      
      <select onChange={e=>setTo(e.target.value)}>
       {options.map(opt=> <option key={opt.code} value={opt.code}>{opt.name}</option> )}

      </select>
      

      <div>
        <textarea cols="50" rows="8" onInput={(e)=>setInput(e.target.value)}
        
        
        ></textarea>
      </div>
      <div>
        <textarea cols="50" rows="8"  value={output} ></textarea>
      </div>
      <div>
        <button onClick={e=>translate()}>Translate</button>
      </div>
    </div>
  );
}

export default App;
