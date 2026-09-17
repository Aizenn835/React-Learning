import Profile from './components/Profile.jsx';
import './App.css';

function App(){
  return(
    <div className='container'>
      <h3>Profile Card</h3>
      <Profile avatarUrl="/image.png"
               name="Saitama"
              />
    </div>
  );
}

export default App;