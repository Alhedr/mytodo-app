import './contact.css'
import Nav from "./Nav";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const  CreateTask =()=> {

    const navigate = useNavigate();
    const [taskID, setTaskID] = useState("");
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [topic, setTopic] = useState("")
    const [categoryID, setCategoryID] = useState("")

    const submit = (e) => {
    e.preventDefault();
    setTaskID("");
    setTaskName("");
    setDueDate("");
    setTopic("");
    setCategoryID("");
    alert('Your task has been created succefully')
    navigate('/')
        }
    
    return(
        
     <>
     
        <div>
        <header className="banner"> 
            <img className="logo-container" src="Todologo.png" alt="logo"/>
          
          <Nav></Nav>
        </header>
        </div>

     <div className='entPage'>
        <div className='content'>
            <form onSubmit={submit}>
                <label>Task ID </label>
                <input
                value={taskID}
                onChange={event => setTaskID(event.target.value)}
                type="text"
                placeholder="A1"
                
                />

                <label>Task Name </label>
                <input
                value={taskName}
                onChange={event => setTaskName(event.target.value)}
                type="text"
                placeholder="Buy clothes"
                />

                <label> Topic </label>
                <input
                value={topic}
                onChange={event => setTopic(event.target.value)}
                type="text"
                placeholder="Shopping"
                />

                <label> Category ID </label>
                <input
                value={categoryID}
                onChange={event => setCategoryID(event.target.value)}
                type="text"
                placeholder="1"
                />

                <label> Due Date </label>
                <input
                value={dueDate}
                onChange={event => setDueDate(event.target.value)}
                type="date"
                placeholder="1/1/2023"
                />
                <button>Submit</button>
            </form>
        </div>
      <footer>all credits to Alhedr, Damanhori, Emneina</footer>
        </div>
      
        </>
    );
};
export default CreateTask;