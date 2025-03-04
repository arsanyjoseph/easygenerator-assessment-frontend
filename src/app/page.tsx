import Header from '@/components/Headers/Header/Header';
import { Box, Typography } from '@mui/material';
import { getProfile } from './actions/auth';

export const dynamic = 'force-dynamic'

const HomePage = async () => {
  const user = await getProfile()
  return (
    <>
      <Header user={user} />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="75vh">
        <Typography variant="h2">Welcome to EasyGenerator</Typography>
      </Box>
    </>
  );
}

export default HomePage;