import { useState } from 'react';
import './App.css';
import StudentCard from './StudentCard';

function App(){
  const[student,setStudent]=useState({
    name:"Khushi",
    grade:86,
  })
  return(
    <div>
      <h1>Mini Project on Student Report card🌟</h1>
      <StudentCard student={student}/>
    </div>
  )
}
export default App
