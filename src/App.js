import './App.css'; //Imports CSS file
import LoginForm from './LoginForm'; //Imports Login Form JavaScript file
import Navigation from './Navigation'; //Imports Navigation JavaScript file


//The function below renders the webpage, and it calls the LoginForm and Navigation functions. They are place in the order that
//they are in so that the navigation bar will be at the top and the login form beneath it.
function App() {
  return (
    <div className="App"> 
      <Navigation /> 
      <div className="content">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
