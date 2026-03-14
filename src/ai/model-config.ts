/**
 * AI Model Configuration
 * Centralized configuration for Gemini model selection
 * 
 * Using Gemini 3.1 Flash as the primary model
 */

import { googleAI } from '@genkit-ai/googleai';

// Model identifiers
const MODELS = {
    // Gemini 3.1 Flash - latest model
    GEMINI_3_1_FLASH: 'gemini-3.1-flash-lite-preview',
    // Stable production model
    GEMINI_2_FLASH: 'gemini-2.5-flash',
    // Pro model for complex reasoning
    GEMINI_PRO: 'gemini-2.5-pro',
} as const;

/**
 * Get the primary AI model for general use
 */
export function getPrimaryModel() {
    return googleAI.model(MODELS.GEMINI_3_1_FLASH);
}

/**
 * Get the vision model for image analysis
 */
export function getVisionModel() {
    return googleAI.model(MODELS.GEMINI_3_1_FLASH);
}

/**
 * Get the model name string for prompts
 */
export function getModelName() {
    return MODELS.GEMINI_3_1_FLASH;
}

// Export model constants for reference
export { MODELS };
