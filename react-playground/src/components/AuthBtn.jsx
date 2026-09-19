import {useState} from 'react';
import '../components/AuthBtn.css';

export default function AuthBtn({text}){
    const [btnText , setBtnText] = useState(text);

    return(
        <button className='auth-btn'>
            {btnText}
        </button>
    );
}