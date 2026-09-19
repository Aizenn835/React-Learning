import loginLogo from '../assets/beach-logo.svg';
import '../components/AuthImagePanel.css';

export default function AuthImagePanel(){
    return(
        <div className="auth-image-panel">
            <h1 className="auth-header-text">
                Tidewater Resort & Spa
            </h1>
            <img src={loginLogo} 
                 alt="This is the app logo for login." 
                 className="login-logo"
            />
            <div className="auth-overlay">
                <h2 className='overlay-header'>Unwind. You've earned it.</h2>
                <p className='supporting-text'>Sun, sand, and nothing else on the agenda.</p>
                <p className='ratings'><i className="ti ti-beach"></i> Oceanfront rooms with sunrise views</p>
                <p className='ratings'><i className ="ti ti-bread"></i> Free breakfast and beach access</p>
                <p className='ratings'><i className="ti ti-star"></i> Loved by 5,000+ travelers</p>
           </div>
        </div>
    );
}