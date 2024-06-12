import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email(),
  number: z.string().optional(),
  // number: z.number().optional(),
});

export type FormType = z.infer<typeof formSchema>;
