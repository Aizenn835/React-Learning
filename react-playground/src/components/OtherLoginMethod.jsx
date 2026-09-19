import GoogleIcon from '../components/GoogleIcon.jsx'
import FacebookIcon from '../components/FacebookIcon.jsx'
import '../components/OtherLoginMethod.css'

export default function OtherLoginMethod(){
    return(
        <div className="container">
            <div className="inner-container">
                <GoogleIcon />
                <p>Google</p>
            </div>
            <div className="inner-container">
                <FacebookIcon />
                <p>Facebook</p>
            </div>
        </div>
    );
}