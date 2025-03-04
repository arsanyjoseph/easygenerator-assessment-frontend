import { z } from 'zod';

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).{8,}$/;

export const loginSchema = z.object({
  username: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(
      passwordRegex,
      'Password must be at least 8 characters long and include at least 1 letter, 1 number, and 1 special character.'
    ),
});
