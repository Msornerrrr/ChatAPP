import { Avatar, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Container } from '@mui/system';

const optionMap = {
  'Posts': {
    route: '',
  },
  'Photos': {
    route: 'photos',
  },
  'Likes': {
    route: 'likes',
  }
}

export const Profile = () => {
  // use navigation
  const navigate = useNavigate();

  const [currentOption, setCurrentOption] = useState('Posts');

  const handleButtonClick = (opt) => {
    setCurrentOption(opt);
    navigate(optionMap[opt].route);
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
        {['Posts', 'Photos', 'Likes'].map(opt => (
          <Button key={opt} variant='text' size='large' onClick={() => handleButtonClick(opt)}
            sx={{ padding: '15px 40px', borderRadius: 0, borderBottom: currentOption === opt && '3px solid #46bee5' }}>
            {opt} </Button>
        ))}
      </Stack>
      <Divider />
      <Container sx={{ width: '80%', margin: '20px auto', border: '1px solid black' }}>
        <Outlet />
      </Container>
    </>
  );
}