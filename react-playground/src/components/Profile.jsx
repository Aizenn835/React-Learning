import './Profile.css';
import {useState , useEffect} from 'react';


function ProfileCard({avatarUrl , name}){
    const [likes , setLikes] = useState(0);
    const [follower , setFollower] = useState(6,230);

    const handleLike = () => {
        setLikes(likes + 1);
        setFollower(follower + 1);
    }
    return(
        <div className='profile-card'>
            <img src={avatarUrl} alt={name} className='avatar'/>
            <div className='footer-card'>
                <h2 className='footer-name'>{name}</h2>
                <p className='dsc'>Saitama is the main protagonist of the anime and manga series One-Punch Man, and also the capital city of Saitama Prefecture in Japan.</p>
                <div className="lower-footer">
                    <div className='follower'>
                        <div className='stats-metrics'>
                            <i className="ti ti-users icon"></i>
                            <p>{follower}</p>
                        </div>
                        <div className='stats-metrics'>
                            <i className="ti ti-news icon"></i>
                            <p>252</p>
                        </div>
                    </div>
                    <button onClick={handleLike} className='like-btn'>
                        <i className="ti ti-heart icon"></i>
                        <span className='likes'>{likes}</span>
                    </button>
                </div>
            </div>
        </div>
    );

}

export default ProfileCard;