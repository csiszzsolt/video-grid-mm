import { useQuery } from 'react-query';
import axios from 'axios';

const useVideos = (sortingCriteria, searchQuery, currentPage, perPage) => {

    const userId = '30452144';
    const albumId = '7669939';
    const bearer_token = 'bf04e67ba612bc5df1e342fcdb4b117f';
    const fetchBaseUrl = 'https://api.vimeo.com';

    const fetchVideos = async () => {
        const sortingParams = {
            'latest': '&sort=date&direction=desc',
            'oldest': '&sort=date&direction=asc',
            'a-z': '&sort=alphabetical&direction=asc',
            'z-a': '&sort=alphabetical&direction=desc'
        };

        let url = `${fetchBaseUrl}/users/${userId}/albums/${albumId}/videos?per_page=${perPage}`;

        if (searchQuery) {
            url += `&query=${encodeURIComponent(searchQuery)}`;
        } else {
            url += `&page=${currentPage}`;
        }

        url += sortingParams[sortingCriteria];

        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${bearer_token}`
            }
        });

        return response.data;
    };

    const { data: videosData, isLoading, isError } = useQuery({
        queryKey: ['videos', sortingCriteria, searchQuery, currentPage],
        queryFn: fetchVideos
    });

    return { videosData, isLoading, isError };
};

export default useVideos;
