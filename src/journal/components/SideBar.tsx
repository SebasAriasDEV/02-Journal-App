import { TurnedInNot } from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

type Props = {
  drawerWidth: number;
};
export const SideBar = ({ drawerWidth }: Props) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open={true}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {/* Drawer Title */}
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Sebastian Arias
          </Typography>
        </Toolbar>
        <Divider />
        {/* Drawer Items */}
        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={item} />
                  <ListItemText
                    secondary={
                      'Ipsum mollit eu ad id quis cupidatat Lorem ea voluptate commodo eu ex.'
                    }
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
