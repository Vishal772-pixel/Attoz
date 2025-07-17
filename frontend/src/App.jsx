import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelCard } from "./components/ChannelsCard";
import {VideoDetail} from "./components/VideoDetail"; 
import { Feed } from "./components/Feed";
import { ChannelDetail } from "./components/ChannelDetail";
import { Navbar } from "./components/Navbar";
import { SearchFeed } from "./components/SearchFeed";
import { Loader } from "./components/Loader";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;