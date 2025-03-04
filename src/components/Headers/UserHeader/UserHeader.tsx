'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { Avatar, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import { useState } from 'react';
import { Logout } from '@mui/icons-material';
import { logout } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';
import { User } from '@/types/user';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';

const UserHeader = ({ user }: { user: User }) => {
    const router = useRouter()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    const handleLogout = () => {
        logout().then(() => router.push('/login'))
    }

    return (
        <Box sx={{ flexGrow: 1, zIndex: 100, }}>
            <AppBar position="absolute" color='secondary' >
                <Toolbar sx={{ p: 2, justifyContent: 'space-between', alignItems: 'center' }} >
                    <Box component={'a'} href="/">
                        <Image src="/logo.svg" alt="EasyGenerator" width={200} height={50} blurDataURL='/logo.svg' />
                    </Box>

                    <Box>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>{user.name[0]}</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={() => router.push('/dashboard')}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Dashboard
                            </ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => router.push('/welcome-page')}>
                            <ListItemIcon>
                                <SettingsIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                Settings
                            </ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                Logout
                            </ListItemText>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default UserHeader;
