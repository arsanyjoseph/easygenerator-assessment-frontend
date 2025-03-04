import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';

const GuestHeader = () => {
    return (
        <Box sx={{ flexGrow: 1, zIndex: 100, }}>
            <AppBar position="absolute" color='secondary' >
                <Toolbar sx={{ p: 2, justifyContent: 'space-between', alignItems: 'center' }} >
                    <Box component={'a'} href="/">
                        <Image src="/logo.svg" alt="EasyGenerator" width={200} height={50} blurDataURL='/logo.svg' />
                    </Box>

                    <Box>
                        <Button variant='contained' color='primary' >
                            <Link href="/login" color="inherit" style={{ textDecoration: 'none', color: 'white' }} >
                                Login
                            </Link>
                        </Button>

                        <IconButton
                            size="large"
                            edge="start"
                            color="primary"
                            aria-label="menu"
                            sx={{ ml: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default GuestHeader;
