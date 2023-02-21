import { Avatar, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Container } from '@mui/system';

const routesMap = {
  '': {
    name: 'Posts'
  },
  'photos': {
    name: 'Photos'
  },
  'likes': {
    name: 'Likes'
  }
}

export const Profile = () => {
  // use navigation
  const navigate = useNavigate();

  const location = useLocation();
  const [currentOption, setCurrentOption] = useState(location.pathname.split('/')[2] ?? '');

  const handleButtonClick = (opt) => {
    setCurrentOption(opt);
    navigate(opt);
  }

  return (
    <>
      <Stack direction='row' spacing={10} justifyContent='center' alignItems='flex-end'
        sx={{ width: '600px', margin: '0 auto 20px' }}>
        <Avatar src='image.jpg' sx={{ width: 150, height: 150 }} />
        <Grid container spacing={2} sx={{ height: '130px' }}>
          <Grid item={true} md={7}>
            <Typography variant='h5' fontWeight='500'> Msornerrrr </Typography>
          </Grid>
          <Grid item={true} md={5}>
            <Button variant='outlined'> Edit Profile </Button>
          </Grid>
          <Grid item={true} md={4}> 0 followings </Grid>
          <Grid item={true} md={4}> 0 followers </Grid>
          <Grid item={true} md={4} />
          <Grid item={true} md={1}> 🍉 </Grid>
          <Grid item={true} md={1}> ⚽ </Grid>
          <Grid item={true} md={1}> 😃 </Grid>
          <Grid item={true} md={1}> 🧠 </Grid>
        </Grid>
      </Stack>

      <Stack direction='row' spacing={5} justifyContent='center'>
        {['', 'photos', 'likes'].map(opt => (
          <Button key={opt} variant='text' size='large' onClick={() => handleButtonClick(opt)}
            sx={{ padding: '15px 40px', borderRadius: 0, borderBottom: currentOption === opt && '3px solid #46bee5' }}>
            {routesMap[opt].name} </Button>
        ))}
      </Stack>
      <Divider />
      <Container sx={{ width: '80%', margin: '20px auto' }}>
        <Outlet />
      </Container>
    </>
  );
}