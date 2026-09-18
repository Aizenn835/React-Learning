import AuthImagePanel from './components/AuthImagePanel.jsx';
import LoginForm from './components/Form.jsx';
import './App.css';

export default function App(){
  return(
    <div className='login-container'>
      <AuthImagePanel/>
      <LoginForm />
    </div>
  )
}