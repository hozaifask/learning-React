import logo from './logo.svg';
import './App.css';
// import Funcomp from './Funcomp';
// import Classcomp from './Classcomp';
// import Event from './Event';
import react,{useState} from react;
import  Student from "./Student"
function App() {
  const[name,setName]=useState("amit");
  return (
    <div className="App">
      <h1>Props in React</h1>
      <student name={name}/>

     
    </div>
  );
}
export default App;
