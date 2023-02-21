import { Home, Message, Explore, AddBox, AccountCircle } from '@mui/icons-material'
import { HomeOutlined, MessageOutlined, ExploreOutlined, AddBoxOutlined, AccountCircleOutlined } from '@mui/icons-material'

export const routesMap = {
  '': {
    name: 'Home',
    icon: <Home fontSize='large'/>,
    iconOutlined: <HomeOutlined fontSize='large'/>
  },
  'messages': {
    name: 'Messages',
    icon: <Message fontSize='large'/>,
    iconOutlined: <MessageOutlined fontSize='large'/>
  },
  'explore': {
    name: 'Explore',
    icon: <Explore fontSize='large'/>,
    iconOutlined: <ExploreOutlined fontSize='large'/>
  },
  'create': {
    name: 'Create',
    icon: <AddBox fontSize='large'/>,
    iconOutlined: <AddBoxOutlined fontSize='large'/>
  },
  'profile': {
    name: 'Profile',
    icon: <AccountCircle fontSize='large'/>,
    iconOutlined: <AccountCircleOutlined fontSize='large'/>
  }
}