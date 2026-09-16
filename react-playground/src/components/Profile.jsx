import './Profile.css';
import {useState} from 'react';

function ProfileCard({avatarUrl , name}){
    const [likes , setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    }

    return(
        <div className='profile-card'>
            <img src={avatarUrl} alt={name} className='avatar'/>
            <div className='footer-card'>
                <h2>{name}</h2>
                <p>Saitama (サイタマ, Saitama) is the main protagonist of the series and the titular One-Punch Man. He stands as the most powerful being in the narrative. Saitama faces a self-imposed existential crisis, as he is now too powerful to gain any thrill from battle.</p>
                <div className="lower-footer">
                    <div className='follower'>
                        <div className='stats-metrics'>
                            <i class="ti ti-users"></i>
                            <p>6,230</p>
                        </div>
                        <div className='stats-metrics'>
                            <i class="ti ti-news"></i>
                            <p>234</p>
                        </div>
                    </div>
                    <button onClick={handleLike} className='like-btn'>
                        <i class="ti ti-heart"></i>
                        <span>{likes}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;