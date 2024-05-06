import React, { useEffect } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const VideoModal = ({ open, onModalClose, video }) => {

    useEffect(() => {
        // Pause the video when the modal is closed
        return () => {
            if (video) {
                const iframe = document.querySelector('.video-player-modal-wrapper iframe');
                iframe.contentWindow.postMessage('{"method":"pause"}', '*');
            }
        };
    }, [open, video]);

    return ( 
        <>
            <Modal className='video-player-modal' open={open} onClose={onModalClose} keepMounted>
                <Box className='video-player-modal-box'>

                    <IconButton onClick={onModalClose} style={{ position: 'absolute', top: 0, left: 0, zIndex: 3 }} sx={{ color: '#ffffff' }} aria-label="close modal">
                        <CloseIcon />
                    </IconButton>

                    {video && (
                        <div className="video-player-modal-wrapper" dangerouslySetInnerHTML={{ __html: video.embed.html }}></div>
                    )}
                </Box>
            </Modal>
        </> 
    );
}
 
export default VideoModal;