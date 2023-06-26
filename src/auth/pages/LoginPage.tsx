import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container>
          {/* Email texfield */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@google.com'
              fullWidth
            />
          </Grid>

          {/* Password Texfield */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contrasena'
              type='password'
              placeholder='Password'
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Buttons Grid */}
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant='outlined' fullWidth>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>

        {/* Register */}
        <Grid container direction='row' justifyContent='end'>
          <Link component={RouterLink} to='/auth/register'>
            Create account
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
