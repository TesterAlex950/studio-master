'use server';

import { z } from 'zod';
import { generateCoverLetter } from '@/ai/flows/tailored-cover-letter';
import { TailoredCoverLetterInputSchema } from '@/ai/schemas';

const FormSchema = TailoredCoverLetterInputSchema;

type State = {
  message: string | null;
  coverLetter: string | null;
  error: {
    jobDescription?: string[];
  } | string | null;
};

export async function createCoverLetterAction(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    jobDescription: formData.get('jobDescription'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid job description. Please check the field and try again.',
      coverLetter: null,
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateCoverLetter(validatedFields.data);
    return {
      message: 'Success! Your cover letter has been generated.',
      coverLetter: result.coverLetter,
      error: null,
    };
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return {
      message: 'An AI error occurred. Please try again later.',
      coverLetter: null,
      error: errorMessage,
    };
  }
}
