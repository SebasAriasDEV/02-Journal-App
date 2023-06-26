import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

type Props = {
  drawerWidth: number;
};

export const Navbar = ({ drawerWidth }: Props) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        {/* Menu Icon */}
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        {/* Menu items */}
        <Grid container direction='row' justifyContent='space-between'>
          <Typography variant='h6' noWrap component='div'>
            Journal App
          </Typography>
          <LogoutOutlined color='error' />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
