import '../components/Input.css'
import {useState} from 'react'

export default function Input({placeholder , type}){
    const [showPassword , setShowPassword] = useState(false);

    const inputType = type === "password" && showPassword ? "text" : type;

    return(
        <div className="input-container">
            <div className="form-input-group">
              <input type={inputType} placeholder={placeholder} required className='inputForm' autocomplete="chrome-off"/>
              {type === "password" && (
              <i 
                 className={showPassword ? "ti ti-eye" : "ti ti-eye-off" }
                 onClick={() => setShowPassword(!showPassword)}
                 style={{ cursor: "pointer" }}
              ></i>
              )}
            </div>
        </div>
    );
}