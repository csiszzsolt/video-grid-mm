import { useQuery } from 'react-query';
import axios from 'axios';

const useVideos = (sortingCriteria, searchQuery, currentPage, perPage) => {

    const userId = '';
    const albumId = '';
    const bearerToken = '';
    const fetchBaseUrl = 'https://api.vimeo.com';

    const fetchVideos = async () => {

        let url = `${fetchBaseUrl}/users/${userId}/albums/${albumId}/videos?fields=name,link,release_time,pictures,embed`;

        const params = {
            per_page: perPage,
            page: currentPage,
            sort: sortingCriteria === 'latest' || sortingCriteria === 'oldest' ? 'date' : 'alphabetical',
            direction: sortingCriteria === 'oldest' || sortingCriteria === 'a-z' ? 'asc' : 'desc',
        }

        if (searchQuery) {
            params.query = encodeURIComponent(searchQuery);
            params.per_page = 100;
        }

        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            },
            params
        });

        return response.data;
    };

    const { data: videosData, isLoading, isError } = useQuery({
        queryKey: ['videos', sortingCriteria, searchQuery, currentPage],
        queryFn: fetchVideos
    });

    let totalPages = 0;

    if (videosData) {
        totalPages = Math.ceil(videosData.total / videosData.per_page);
    }

    return { videosData, isLoading, isError, totalPages };
};

export default useVideos;
