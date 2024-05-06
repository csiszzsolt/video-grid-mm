import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ value, onChange }) => {
    return ( 
        <TextField className='custom-search-input' size='small' label="Search" variant="outlined" value={value} onChange={onChange} />
    );
}
 
export default SearchBar;