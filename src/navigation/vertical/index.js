// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Chat App',
      icon: ChatIcon,
      path: '/chat',
    },
    {
      title: 'Call Logs',
      icon: CallIcon,
      path: '/call-logs',
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },

    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },

    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },

    // {
    //   sectionTitle: 'User Interface'
    // },

  ]
}

export default navigation
