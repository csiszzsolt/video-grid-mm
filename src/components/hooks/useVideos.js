import { useQuery } from 'react-query';
import axios from 'axios';

const useVideos = (sortingCriteria, searchQuery, currentPage, perPage) => {

    const userId = '30452144';
    const albumId = '7669939';
    const bearer_token = 'bf04e67ba612bc5df1e342fcdb4b117f';
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
                'Authorization': `Bearer ${bearer_token}`
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
