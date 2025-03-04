'use client'

import { useState } from 'react';
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { register } from '@/app/actions/auth';
import { registerSchema } from '@/schemas/register.schema';
import './RegisterForm.css'
import Link from 'next/link';


const RegisterForm = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const {
        handleSubmit,
        control
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = (data: { name: string, email: string, password: string, confirmPassword: string }) => {
        register(data)
            .then(() => {
                toast.success('Successfully Registered')
                router.push('/')
            })
            .catch(error => {
                console.error(error);
                toast.error('Invalid Credentials')
            });
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={4} width={'100%'} >
            <Typography variant="h4">Welcome!</Typography>
            <Typography variant="caption" >Already a member? <Link href={'/login'}>Login</Link></Typography>
            <form className='registerForm' onSubmit={handleSubmit(onSubmit)} >
                <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState: { error, invalid } }) => (
                        <TextField
                            {...field}
                            label="Name"
                            type='text'
                            placeholder='John Doe'
                            error={invalid}
                            variant="standard"
                            helperText={error?.message ?? ' '}
                            fullWidth
                        />)}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState: { error, invalid } }) => (
                        <TextField
                            {...field}
                            label="Email"
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
                <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field, fieldState: { error, invalid } }) => (<TextField
                        {...field}
                        label="Confirm Password"
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
                <Button sx={{ gridColumn: 'span 2' }} variant="contained" size="large" fullWidth type='submit' >Register</Button>
            </form>
        </Box>
    )
}

export default RegisterForm