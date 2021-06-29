import profile from "./image-victor.jpg";
import header from "./bg-pattern-card.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Card">
          <img className="Header"src={header} alt="blue header"/>
        <div className="ProfileContainer">
          <img className="Profile" src={profile} alt="profile" />
        </div>
        <div className="TitleBox">
          <div className="Title">
            <h1>Victor Crest <span className="Age">26</span></h1>
          </div>
          
          <div className="Title">
            <h2>London</h2>
          </div>
        </div>
        
        <div className="Footer">
          <div>
             <h1>80K</h1>
             <h2>Followers</h2>
          </div>
          <div>
             <h1>803K</h1>
             <h2>Likes</h2>
          </div>
          <div>
             <h1>14K</h1>
             <h2>Photos</h2>
          </div>
        </div>
      </div>
      

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
