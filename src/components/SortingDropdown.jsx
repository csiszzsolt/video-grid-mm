import React from 'react';
import { InputLabel, MenuItem, FormControl, Select, Box } from '@mui/material';

const SortingDropdown = ({ value, onChange }) => {
    return ( 
       <Box sx={{ maxWidth: 200, width: '100%' }}>
            <FormControl className='custom-sorting-dropdown-wrapper' size='small' fullWidth>
                <InputLabel id="sorting-dropdown-label">Sort by</InputLabel>
                <Select
                labelId="sorting-dropdown-label"
                id="sorting-dropdown-select"
                value={value}
                label="Sort by"
                onChange={onChange}
                >
                    <MenuItem value="latest">Latest</MenuItem>
                    <MenuItem value="oldest">Oldest</MenuItem>
                    <MenuItem value="a-z">A-Z</MenuItem>
                    <MenuItem value="z-a">Z-A</MenuItem>
                </Select>
            </FormControl>
       </Box>
     );
}
 
export default SortingDropdown;