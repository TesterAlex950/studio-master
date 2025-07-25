import { z } from 'zod';

export const TailoredCoverLetterInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The job description for the position the user is applying for.'),
});
export type TailoredCoverLetterInput = z.infer<typeof TailoredCoverLetterInputSchema>;
