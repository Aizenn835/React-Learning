import loginLogo from '../assets/authImage.jpg';
import '../components/AuthImagePanel.css';

export default function AuthImagePanel(){
    return(
        <div  className="auth-image-panel">
            <img src={loginLogo} alt="This is the app logo for login." className="login-logo"/>
        </div>
    );
}