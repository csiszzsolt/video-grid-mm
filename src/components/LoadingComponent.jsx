import React from 'react';
import VideoCardSkeleton from './VideoCardSkeleton';

const LoadingComponent = ({ count }) => {
    const skeletons = [];

    for (let i = 0; i < count; i++) {
        skeletons.push(<VideoCardSkeleton key={i} />)
    }

    return (
        <>
            { skeletons }
        </>
     );
}
 
export default LoadingComponent;