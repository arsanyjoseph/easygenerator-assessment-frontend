'use client'

import { useState } from 'react';
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { loginSchema } from '@/schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import './LoginForm.css'
import { login } from '@/app/actions/auth';
import Link from 'next/link';
import { AxiosError } from 'axios';


const LoginForm = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const {
        handleSubmit,
        control
    } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = (data: { username: string, password: string }) => {
        login(data)
            .then(res => {
                if(res?.access_token) {
                    toast.success('Successfully logged in')
                    router.push('/dashboard')
                } else {
                    toast.error('Cannot Login')
                }
            })
            .catch((error: AxiosError) => {
                console.error(error);
                toast.error(error.message)
            });
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={4} width={'100%'} >
            <Typography variant="h4">Welcome back!</Typography>
            <Typography variant="caption" >Don't have an account? <Link href='/register'>Register</Link></Typography>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)} >
                <Controller
                    name="username"
                    control={control}
                    render={({ field, fieldState: { error, invalid } }) => (
                        <TextField
                            {...field}
                            label="Username"
                            type='email'
                            placeholder='user@example.com'
                            error={invalid}
                            variant="standard"
                            helperText={error?.message ?? ' '}
                            fullWidth
                        />)}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field, fieldState: { error, invalid } }) => (<TextField
                        {...field}
                        label="Password"
                        error={invalid}
                        variant="standard"
                        type={showPassword ? 'text' : 'password'}
                        helperText={error?.message ?? ' '}
                        fullWidth
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment onClick={() => setShowPassword(!showPassword)} position="end">
                                        {showPassword ? <VisibilityOffIcon sx={{ cursor: 'pointer' }} /> : <VisibilityIcon sx={{ cursor: 'pointer' }} />}
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />)}
                />
                <Button variant="contained" size="large" fullWidth type='submit' >Login</Button>
            </form>
        </Box>
    )
}

export default LoginForm