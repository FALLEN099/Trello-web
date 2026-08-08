import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloLogo } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menu/Worksspaces'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Profiles from './Menu/Profiles'
import Tooltip from '@mui/material/Tooltip'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'

function AppBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trelloCustom.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      px: 2,
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}>
          <SvgIcon component={TrelloLogo} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant="span" sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Trello</Typography>
        </Box>

        <Workspaces />
        <Button variant="outlined" startIcon={<LibraryAddIcon />}>Create</Button>
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <ModeSelect />

        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar