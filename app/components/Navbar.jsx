'use client';

import { useRouter } from 'next/navigation';
import { atom } from 'jotai';
import { AppBar } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';

const Navbar = () => {
  const router = useRouter();
  return (
    <AppBar color="primary" position="sticky">
      <Box>
        <Button
          onClick={() => router.push('/')}
          color="secondary"
          variant="contained"
        >
          Home
        </Button>
        <Button
          onClick={() => router.push('/products')}
          color="secondary"
          variant="contained"
        >
          Products
        </Button>
      </Box>
    </AppBar>
  );
};

export default Navbar;
