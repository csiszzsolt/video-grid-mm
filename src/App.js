import './App.css';
import VideoGrid from './components/VideoGrid';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <VideoGrid />
    </QueryClientProvider>
  );
}

export default App;
