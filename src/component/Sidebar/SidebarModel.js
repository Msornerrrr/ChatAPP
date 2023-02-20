import { Home, Message, Explore, AddBox, AccountCircle } from '@mui/icons-material'
import { HomeOutlined, MessageOutlined, ExploreOutlined, AddBoxOutlined, AccountCircleOutlined } from '@mui/icons-material'

export const optionMap = {
  'Home': {
    route: '/',
    focused: true,
    icon: <Home fontSize='large'/>,
    iconOutlined: <HomeOutlined fontSize='large'/>
  },
  'Messages': {
    route: '/messages',
    focused: false,
    icon: <Message fontSize='large'/>,
    iconOutlined: <MessageOutlined fontSize='large'/>
  },
  'Explore': {
    route: '/explore',
    focused: false,
    icon: <Explore fontSize='large'/>,
    iconOutlined: <ExploreOutlined fontSize='large'/>
  },
  'Create': {
    route: '/create',
    focused: false,
    icon: <AddBox fontSize='large'/>,
    iconOutlined: <AddBoxOutlined fontSize='large'/>
  },
  'Profile': {
    route: '/profile',
    focused: false,
    icon: <AccountCircle fontSize='large'/>,
    iconOutlined: <AccountCircleOutlined fontSize='large'/>
  }
}