import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [urls, setUrls] = useState([]);
  const [urlVal, setUrlVal] = useState('');
  const [showstatus, setShowStatus] = useState('');
  const [showval, setShowVal] = useState('');
  const [showtext, setShowText] = useState('');

  const onChangehandler = (event) => {
    setUrlVal(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const url = form.elements.url.value;
    const inputVal = urlVal
    console.log(inputVal);  

    const data = {url: inputVal}
    let headers = {
      'Content-Type': 'application/json',
      'charset': 'UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
    axios.post('http://localhost:5000/urls', data,{headers} )
      .then((res) => {
        console.log(res);
        setShowStatus(JSON.stringify(res.data));
        setShowVal(JSON.stringify(res.status));
        setShowText(JSON.stringify(res.statusText));

      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <label>
          URL: <br></br>
          <input type="text" name="url" value={urlVal} onChange={onChangehandler} /><br></br>
        </label><br></br>
        <button type="submit">Add</button>
      </form>
      <br></br>
      <table style={{width:"100%", border:"1px solid black", borderCollapse:"collapse"}}>
        <tr>
          <th style={{border:"1px solid black", backgroundColor:"#ffcccc"}}>URL</th>
          <th style={{border:"1px solid black", backgroundColor:"#ffcccc"}}>Status Value</th>
          <th style={{border:"1px solid black", backgroundColor:"#ffcccc"}}>Website Status</th>
        </tr>
        <tr>
          <td style={{border:"1px solid black", textAlign:"center"}}>{urlVal}</td> 
          <td style={{border:"1px solid black",textAlign:"center"}}>{showval !== '' && showval}</td>
          <td style={{border:"1px solid black", textAlign:"center"}}>{showtext !== '' && showtext}</td>
        </tr>
        </table>
    </div>
  );
}

export default App;
