import React from 'react';
import './App.css';
import im from "./Images/im.jpg";
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div className="App">
      {/* Question 1: Images */}
      <div className="image-container">
        <div>
          <p>Image from public/Images</p>
          <img src="/Images/im.webp" alt="Anime Meme" width={450}/>
        </div>
        <div>
          <p>Image from src/Images</p>
          <img src={im} alt="Local Image" width={290}/>
        </div>
      </div>
      
      {/* Question 2: Form */}
      <div className="form-container">
        <h2>Novell Services Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Username: <input type="text" name="username" /></label>
          <label>Password: <input type="password" name="password" /></label>
          <label>City of Employment: <input type="text" name="city" /></label>
          <label>
            Web server:
            <select name="server">
              <option value="">-- Choose a server --</option>
              <option value="Server1">Server 1</option>
              <option value="Server2">Server 2</option>
              <option value="Server3">Server 3</option>
            </select>
          </label>
          
          <fieldset>
            <legend>Please specify your role:</legend>
            <label><input type="radio" name="role" value="Admin" /> Admin</label>
            <label><input type="radio" name="role" value="Engineer" /> Engineer</label>
            <label><input type="radio" name="role" value="Manager" /> Manager</label>
            <label><input type="radio" name="role" value="Guest" /> Guest</label>
          </fieldset>
          
          <fieldset>
            <legend>Single Sign-on to the following:</legend>
            <label><input type="checkbox" name="singleSignOn" value="Mail" /> Mail</label>
            <label><input type="checkbox" name="singleSignOn" value="Payroll" /> Payroll</label>
            <label><input type="checkbox" name="singleSignOn" value="Self-service" /> Self-service</label>
          </fieldset>
          
          <div className="button-container">
            <button type="submit">Login</button>
            <button type="button">Reset</button>
          </div>
        </form>
      </div>
      
      {/* Question 3: User Profile */}
      <ProfilePage />
    </div>
  );
}

export default App;