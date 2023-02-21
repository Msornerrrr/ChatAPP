import { Home, Message, Explore, AddBox, AccountCircle } from '@mui/icons-material'
import { HomeOutlined, MessageOutlined, ExploreOutlined, AddBoxOutlined, AccountCircleOutlined } from '@mui/icons-material'

export const optionMap = {
  'Home': {
    route: '/',
    icon: <Home fontSize='large'/>,
    iconOutlined: <HomeOutlined fontSize='large'/>
  },
  'Messages': {
    route: '/messages',
    icon: <Message fontSize='large'/>,
    iconOutlined: <MessageOutlined fontSize='large'/>
  },
  'Explore': {
    route: '/explore',
    icon: <Explore fontSize='large'/>,
    iconOutlined: <ExploreOutlined fontSize='large'/>
  },
  'Create': {
    route: '/create',
    icon: <AddBox fontSize='large'/>,
    iconOutlined: <AddBoxOutlined fontSize='large'/>
  },
  'Profile': {
    route: '/profile',
    icon: <AccountCircle fontSize='large'/>,
    iconOutlined: <AccountCircleOutlined fontSize='large'/>
  }
}