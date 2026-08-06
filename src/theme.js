import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorScheme: {
    light: {
      palette: {
        primary: {
          main: '#fff'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#000000'
        }
      }
    }
  }
})

export default theme