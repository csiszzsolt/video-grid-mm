import React from 'react';
import moment from 'moment';
import { IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const VideoCard = ({ video, onVideoClick }) => {
    const { name, link, release_time, pictures } = video;

    const formatTimestamp = (timestamp) => {
        const formattedDate = moment(timestamp).format('MMM DD YYYY | hh:mm A');
        return formattedDate;
    };

    return (
        <div className='video-card'>
            <div className="video-card-image-wrapper" onClick={onVideoClick} >
                <img className='video-card-image' src={ pictures.sizes[3].link } alt="Card" />

                <IconButton className='video-card-play-button' sx={{ position: 'absolute', top: '50%', left: '50%', zIndex: 3, color: '#ffffff' }} aria-label="play media">
                    <PlayCircleIcon sx={{ fontSize: 40 }} />
                </IconButton>

            </div>
            <div className="video-card-content">
                <h4 className='video-card-title'>{ name }</h4>
                <p>{ formatTimestamp(release_time) }</p>
                <a href={link} className='sr-only video-card-link'> </a>
            </div>
        </div> 
    )
};
 
export default VideoCard;