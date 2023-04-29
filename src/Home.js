import Nav from "./Nav";
import './App.css';


const Home = () => {
 
  return (
    
      <div>
        <div>
        <header className="banner"> 
            <img className="logo-container" src="Todologo.png" alt="logo"/>
          
          <Nav></Nav>
        </header>
        </div>
        <div className="entPage">
          <div className="content">
          <h3>Never Forget a Task Again: Keep Your Schedule on Track with Us</h3>
          <img src="Todologo.png" alt="logo"/>
          <p>Welcome to our to-do list website, where organization and productivity meet!
            <br/><br/>With our intuitive platform, you can easily create and manage tasks, set reminders, and prioritize your daily activities.<br/><br/>
            Say goodbye to forgetfulness and hello to a more efficient and stress-free life with our to-do list website.</p>
          </div>
      
      <footer>all credits to Alhedr, Damanhori, Emneina</footer>
      </div>
    </div>
  );
};
export default Home;
