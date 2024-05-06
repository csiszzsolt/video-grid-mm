import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import LoadingComponent from './LoadingComponent';
import SortingDropdown from './SortingDropdown';
import VideoModal from './VideoModal';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import useVideos from './hooks/useVideos';

const VideoGrid = () => {

    const perPage = 24;
    const [sortingCriteria, setSortingCriteria] = useState('latest');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const { videosData, isLoading, isError } = useVideos(sortingCriteria, searchQuery, currentPage, perPage);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const videos = videosData?.data || [];
    
    const totalPages = Math.ceil(videosData?.total / perPage);

    const handleSortingChange = (event) => {
        setSortingCriteria(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
        setModalOpen(true);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        const rootElement = document.getElementById('root');
        rootElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [currentPage]);

    return ( 
        <>
            <div className="video-grid-controls">
                <SearchBar value={searchQuery} onChange={handleSearchChange} />
                <SortingDropdown value={sortingCriteria} onChange={handleSortingChange} />
            </div>

            <div className="video-card-row">
                {isLoading ? (
                    <LoadingComponent count={8} />
                ) : isError ? (
                    <div>Error fetching data</div>
                ) : (
                    videos.map((video, index) => (
                        <VideoCard key={index} video={video} onVideoClick={() => handleVideoClick(video)} />
                    ))
                )}
            </div>

            <VideoModal video={selectedVideo} open={isModalOpen} onModalClose={() => setModalOpen(false)} />
        
            {searchQuery ? (
                <p className='custom-search-results-message'>Search results for "{searchQuery}"</p>
            ) : (
                <Pagination 
                    totalPages={totalPages}
                    currentPage={currentPage}
                    isLoading={isLoading}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage} 
                />
            )}

        </>
     );
}
 
export default VideoGrid;
