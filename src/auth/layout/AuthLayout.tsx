import { Grid, Typography } from '@mui/material';

type Props = {
  children: any;
  title: string;
};

export const AuthLayout = ({ children, title }: Props) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: 'primary.main',
        padding: 4,
      }}
    >
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant='h5' sx={{ mb: 2 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
