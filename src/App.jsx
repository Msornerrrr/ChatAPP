import './App.css';
import { CssBaseline } from '@mui/material';

import { Box } from '@mui/system';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import { Sidebar } from './component/Sidebar/Sidebar';
import { HomePage } from './component/home/HomePage';

function App() {
  return (<>
    <CssBaseline />
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/messages' element />
          <Route path='/explore' element />
          <Route path='/create' element />
          <Route path='/profile' element />
        </Routes>
      </Box>
    </Router>
  </>);
}

export default App;
