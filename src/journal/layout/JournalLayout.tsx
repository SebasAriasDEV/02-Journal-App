import { Box, Toolbar } from '@mui/material';
import { Navbar, SideBar } from '../components';

const drawerWidth = 280;

export const JournalLayout = ({ children }: any) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <Navbar drawerWidth={drawerWidth} />
      {/* Sidebar */}
      <SideBar drawerWidth={drawerWidth} />

      {/* Main */}
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
};
