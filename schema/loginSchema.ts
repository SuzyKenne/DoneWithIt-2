import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, 'Password must atleast 5 characters'),
});
