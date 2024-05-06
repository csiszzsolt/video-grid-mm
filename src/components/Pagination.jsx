import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Pagination = ({ totalPages, currentPage, isLoading, handlePrevPage, handleNextPage }) => {

    return ( 
    <div className="custom-pagination">
        
        <button className='custom-pagination-button' onClick={handlePrevPage} disabled={currentPage === 1 || isLoading}>
            <ArrowBackIosNewIcon />
        </button>
        {isLoading ? (
                <p className='custom-pagination-text'>Loading...</p>
            ) : (
                <p className='custom-pagination-text'>Page {currentPage} of {totalPages}</p>
            )}
        <button className='custom-pagination-button' onClick={handleNextPage} disabled={currentPage === totalPages || isLoading}>
            <ArrowForwardIosIcon />
        </button>
    </div>
 );
}
 
export default Pagination;