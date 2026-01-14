/**
 * Genkit initialization and configuration
 * This is the core setup for the Genkit AI framework
 */

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

// Initialize Genkit with Google AI plugin
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY,
    }),
  ],
  // Enable telemetry and tracing
  enableTracingAndMetrics: true,
  // Set default model
  model: 'googleai/gemini-2.5-flash',
});

export default ai;
