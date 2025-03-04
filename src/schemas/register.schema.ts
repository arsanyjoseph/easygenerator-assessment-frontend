import { z } from 'zod';

const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).{8,}$/;

export const registerSchema = z
    .object({
        name: z.string().min(1, 'Name is required'),
        email: z.string().email('Invalid email'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters long')
            .regex(
                passwordRegex,
                'Password must include at least 1 letter, 1 number, and 1 special character.'
            ),
        confirmPassword: z
            .string()
            .min(8, 'Confirm password must be at least 8 characters long')
            .regex(
                passwordRegex,
                'Confirm password must include at least 1 letter, 1 number, and 1 special character.'
            ),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Passwords do not match',
    });
