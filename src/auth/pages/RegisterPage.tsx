import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
          {/* Email texfield */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder='Nombre...'
              fullWidth
            />
          </Grid>
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
          <Grid item xs={12}>
            <Button variant='contained' fullWidth>
              Crear cuenta
            </Button>
          </Grid>
        </Grid>

        {/* Register */}
        <Grid container direction='row' justifyContent='end'>
          <Link component={RouterLink} to='/auth/login'>
            Ya tienes cuenta? Ingresar.
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
