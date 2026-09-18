import '../components/Form.css';
import InputForm from'../components/input/Input.jsx';

export default function Form(){
    return(
        <div className="form-container">
            <h1 className='form-header'>Create an account</h1>
            <p className='account-question'>Already have an account? <span className='login'>Log in</span></p>
            <InputForm />
        </div>
    );
}