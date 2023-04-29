import React from 'react';
import './Tasks.css';
import useData from './useTaskData';
import Tasks from './Tasks';
import Nav from './Nav';

const ViewDetails = () => {
  const [data] = useData();

  return (
    <div>
        <div className='banner'>
            <header className="banner"> 
                <img className="logo-container" src="Todologo.png" alt="logo"/>
                <Nav></Nav>
            </header>
        </div>
        <div className='entPage'>
            
            <div className='taskBox'>
                {data.map((task) => (
                <Tasks key={task.taskID} Tasks={task} />
                ))}
            </div>
            <footer>all credits to Alhedr, Damanhori, Emneina</footer>
        </div>
    </div>
  );
};

export default ViewDetails;
