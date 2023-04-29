import React from 'react';
import './Tasks.css'
import { Link } from 'react-router-dom';




const Tasks = (props) => {
    const { taskID, taskName, dueDate, doneStatus, categoryID} = props.Tasks;
    return (
        <div className="col">
            <div className="card service h-100">
                <div className="card-body">
                    <h5 className="card-title">{taskID}</h5>
                    <p className="card-text">{taskName}</p>
                    <p className="card-text">{categoryID}</p>
                    <p className="card-text">{dueDate}</p>
                    
                    <Link to={`/Tasks/${taskID}`}>
                       
                    </Link>
                    {doneStatus ? (
                        <label className="complete">Complete</label>
                    ) : (
                        <label className="not-complete">Not Complete</label>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Tasks;