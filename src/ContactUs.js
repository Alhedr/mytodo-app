import './contact.css'
import Nav from "./Nav";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const  ContactUs =()=> {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const submit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMsg("");
    alert('Your message has been sent successfuly')
    navigate('/');
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
                <label>Your Name: </label>
                <input
                value={name}
                onChange={event => setName(event.target.value)}
                type="text"
                placeholder="John Doe"
                
                />

                <label>Your Email: </label>
                <input
                value={email}
                onChange={event => setEmail(event.target.value)}
                type="text"
                placeholder="example@something.com"
                />

                <label>Your Message: </label>
                <input
                value={msg}
                onChange={event => setMsg(event.target.value)}
                type="text"
                placeholder="Type your message here..."
                />
                <button>Send</button>
            </form>
        </div>
      <footer>all credits to Alhedr, Damanhori, Emneina</footer>
        </div>
      
        </>
    );
};
export default ContactUs;