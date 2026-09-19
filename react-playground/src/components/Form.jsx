import '../components/Form.css'
import InputForm from '../components/Input.jsx'
import AuthBtn from '../components/AuthBtn.jsx'
import OtherLoginMethod from '../components/OtherLoginMethod.jsx'

export default function Form(){
    return(
        <div className="form-container">
            <div className="header">
                <h1 className='form-header'>Create an account</h1>
                <p className='account-question'>Already have an account? <span className='login-underline'>Log in</span></p>
            </div>
            <div className="input-field">
                <div className="grid-input">
                    <InputForm placeholder={"First Name"} type="text"/>
                    <InputForm placeholder={"Last Name"} type="text"/>
                </div>
                <InputForm placeholder={"Email"} type="email"/>
                <InputForm placeholder={"Password"} type="password"/>
                <div className="terms-container">
                      <div className="checkbox-container">
                         <input type="checkbox" name="terms" className="checkbox"/>
                      </div>
                      <p className='terms-condition'>I agree to the <span className="underline-terms">Terms & Condition</span></p>
                </div>
                <AuthBtn text={"Create account"}/>
                <div className="or-divider">
                    <div className="line" />
                    <span>Or</span>
                    <div className="line" />
                </div>
                <OtherLoginMethod />
                
            </div>
        </div>
    );
}