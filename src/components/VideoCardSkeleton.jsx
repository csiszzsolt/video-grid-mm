import React from 'react';
import { Skeleton } from '@mui/material';

const VideoCardSkeleton = () => {
    return ( 
        <div className="video-card video-card--skeleton">
            <Skeleton className='video-card--skeleton-img' animation="wave" variant='rounded' height={168} />
            <Skeleton animation="wave" variant='rounded' sx={{ fontSize: '18px' }} />
            <Skeleton animation="wave" variant='rounded' sx={{ fontSize: '18px' }} />
            <Skeleton animation="wave" variant='rounded' sx={{ fontSize: '18px' }} />
        </div>
     );
}
 
export default VideoCardSkeleton;