'use server';
/**
 * @fileOverview An AI-powered gift advisor that provides personalized flower and gift recommendations.
 *
 * - aiGiftAdvisorRecommendation - A function that handles the gift recommendation process.
 * - AiGiftAdvisorRecommendationInput - The input type for the aiGiftAdvisorRecommendation function.
 * - AiGiftAdvisorRecommendationOutput - The return type for the aiGiftAdvisorRecommendation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiGiftAdvisorRecommendationInputSchema = z.object({
  occasion: z
    .string()
    .describe('The occasion for the gift (e.g., "Birthday", "Anniversary", "Graduation").'),
  recipient: z
    .string()
    .describe('The recipient of the gift (e.g., "Mother", "Friend", "Colleague", "Partner").'),
  preferences: z
    .string()
    .describe('Any specific preferences or interests of the recipient (e.g., "Loves roses, prefers elegant gifts", "Enjoys cooking", "Gardening enthusiast").'),
});
export type AiGiftAdvisorRecommendationInput = z.infer<
  typeof AiGiftAdvisorRecommendationInputSchema
>;

const AiGiftAdvisorRecommendationOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      productName: z.string().describe('The name of the recommended product.'),
      description: z.string().describe('A brief description of the recommended product.'),
      reason: z
        .string()
        .describe('The specific reason why this product is recommended based on the input criteria.'),
      category: z
        .string()
        .describe('The category of the product (e.g., "Flowers", "Gifts", "Home Decor").'),
    })
  ),
});
export type AiGiftAdvisorRecommendationOutput = z.infer<
  typeof AiGiftAdvisorRecommendationOutputSchema
>;

export async function aiGiftAdvisorRecommendation(
  input: AiGiftAdvisorRecommendationInput
): Promise<AiGiftAdvisorRecommendationOutput> {
  return aiGiftAdvisorRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiGiftAdvisorRecommendationPrompt',
  input: { schema: AiGiftAdvisorRecommendationInputSchema },
  output: { schema: AiGiftAdvisorRecommendationOutputSchema },
  prompt: `You are an expert gift advisor for 