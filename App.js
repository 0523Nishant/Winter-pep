import './App.css';
import {useState} from 'react';
import Welcome from './Welcome';
import Marquee from 'react-fast-marquee';

function App() {
    const [name , setName] = useState("")
    const [regNo , setregNo] = useState("")
    const [submit , setSubmit] = useState(false)


    return (

        <div id="f">
        <div id="zero">
            <label>Name</label> &nbsp;
            <input
            value ={name}
            onChange={(event)=>{setName(event.target.value)}}></input>
             <label> Registration Number</label>
             &nbsp;
            <input
            
            value ={regNo}
            onChange={(event)=>{setregNo(event.target.value)}}>

            </input>
            
            </div>
            <br />
            <br /> 
            <div><button id ="demo" onClick={()=>{setSubmit(!submit)}}>Submit</button> </div>

            {(submit && name && regNo) && <Welcome name={name} regNo={regNo}></Welcome>}
             <br />
             <div>
            <marquee id="ze">Assignment Done by Nishant Gupta(12001933)
            </marquee>
            </div>
        </div>
  
    );

}

export default App;