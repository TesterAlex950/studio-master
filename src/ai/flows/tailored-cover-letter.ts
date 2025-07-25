'use server';

/**
 * @fileOverview A tailored cover letter generator AI agent.
 *
 * - generateCoverLetter - A function that handles the cover letter generation process.
 * - TailoredCoverLetterOutput - The return type for the generateCoverLetter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { TailoredCoverLetterInput, TailoredCoverLetterInputSchema } from '@/ai/schemas';

const TailoredCoverLetterOutputSchema = z.object({
  coverLetter: z.string().describe('The tailored cover letter.'),
});
export type TailoredCoverLetterOutput = z.infer<typeof TailoredCoverLetterOutputSchema>;

export async function generateCoverLetter(input: TailoredCoverLetterInput): Promise<TailoredCoverLetterOutput> {
  return tailoredCoverLetterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailoredCoverLetterPrompt',
  input: {schema: TailoredCoverLetterInputSchema},
  output: {schema: TailoredCoverLetterOutputSchema},
  prompt: `You are an expert resume and cover letter writer. Your job is to write a cover letter based on a job description.

Job Description: {{{jobDescription}}}

Cover Letter:`, 
});

const tailoredCoverLetterFlow = ai.defineFlow(
  {
    name: 'tailoredCoverLetterFlow',
    inputSchema: TailoredCoverLetterInputSchema,
    outputSchema: TailoredCoverLetterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
