
import React,{useState} from "react";
function App(){
  let [weight,setWeight]=useState(0);
  let [height,setHeight]=useState(0);
  let [bmi,setBmi]=useState('');
  let [message,setMessage]=useState('');
  
  let calcbmi=(e)=>{
    
e.preventDefault();
if(weight===0 || height===0){
alert("Enter a valid weight & height");
}else{
  let bmiVar=((weight/(height*height))*703)
  setBmi(bmiVar.toFixed(1))
}

if(bmi<25){
  setMessage("You are under weight")
}else if(bmi>=25 && bmi<30){
  setMessage("You are healthy weight")
}else{
  setMessage("You are overweight")
}
  }


  let reload=()=>{
    window.location.reload();
  }

return(
  <div class="box">
  <h3>BMI Calculator</h3>
  <form onSubmit={calcbmi}>
  <p>Weight(lbs)</p>
  <input class="inp1" type="text" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
  
  <p>Height(in)</p>
  <input class="inp1" type="text" value={height} onChange={(e)=>setHeight(e.target.value)}/>
  <button type="submit">Submit</button>
  <button onClick={reload}>Reload</button>
  <p>Your BMI is :{bmi}</p>
  <p>{message}</p>
  </form>
  </div>

)
}

export default App;