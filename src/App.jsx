import './App.css';
import { CssBaseline, Box, Container } from '@mui/material';

import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import { Sidebar } from './component/sidebar/Sidebar';
import { HomePage } from './component/home/HomePage';
import { Profile } from './component/profile/Profile';
import { Photos } from './component/profile/Photos';
import { NoMatch } from './component/error/NoMatch';
import { Posts } from './component/profile/Posts';
import { Likes } from './component/profile/Likes';

export const App = () => {
  return (<>
    <CssBaseline />
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Container
          component='main'
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Routes>
            <Route path='' element={<HomePage />} />
            <Route path='messages' element />
            <Route path='explore' element />
            <Route path='create' element />
            <Route path='profile' element={<Profile />}>
              <Route path='' element={<Posts />} />
              <Route path='photos' element={<Photos />} />
              <Route path='likes' element={<Likes />} />
            </Route>
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  </>);
}
