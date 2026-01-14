/**
 * Tool definitions for Genkit
 * These are functions that the AI can call automatically
 */

import { ai } from '../genkit';
import { z } from 'zod';

// Weather Tool - Get weather information for a location
export const weatherTool = ai.defineTool(
  {
    name: 'getWeather',
    description: 'Get the current weather for a specific location. Use this when users ask about weather conditions.',
    inputSchema: z.object({
      location: z.string().describe('The city and state/country, e.g. "San Francisco, CA"'),
    }),
    outputSchema: z.object({
      location: z.string(),
      temperature: z.number(),
      conditions: z.string(),
      humidity: z.number(),
      windSpeed: z.number(),
    }),
  },
  async (input) => {
    // Simulated weather data - in production, call a real weather API
    const temp = Math.floor(Math.random() * 30) + 50; // 50-80°F
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)];
    
    return {
      location: input.location,
      temperature: temp,
      conditions,
      humidity: Math.floor(Math.random() * 40) + 40,
      windSpeed: Math.floor(Math.random() * 15) + 5,
    };
  }
);

// Calculator Tool - Perform mathematical calculations
export const calculatorTool = ai.defineTool(
  {
    name: 'calculator',
    description: 'Perform mathematical calculations. Supports basic arithmetic, exponents, and more.',
    inputSchema: z.object({
      expression: z.string().describe('The mathematical expression to evaluate, e.g. "2 + 2" or "sqrt(16)"'),
    }),
    outputSchema: z.object({
      expression: z.string(),
      result: z.number(),
    }),
  },
  async (input) => {
    try {
      // Safe eval for basic math - in production, use a proper math parser
      const result = Function(`'use strict'; return (${input.expression})`)();
      return {
        expression: input.expression,
        result: Number(result),
      };
    } catch (error) {
      throw new Error(`Unable to calculate: ${input.expression}`);
    }
  }
);

// Web Search Tool - Search for information
export const searchTool = ai.defineTool(
  {
    name: 'webSearch',
    description: 'Search the web for current information, news, or facts. Use when you need up-to-date information.',
    inputSchema: z.object({
      query: z.string().describe('The search query'),
      numResults: z.number().optional().describe('Number of results to return (default: 5)'),
    }),
    outputSchema: z.object({
      query: z.string(),
      results: z.array(z.object({
        title: z.string(),
        snippet: z.string(),
        url: z.string(),
      })),
    }),
  },
  async (input) => {
    // Simulated search results - in production, call a real search API
    const mockResults = [
      {
        title: `Information about ${input.query}`,
        snippet: `This is a simulated search result for "${input.query}". In production, this would be real search data.`,
        url: `https://example.com/search?q=${encodeURIComponent(input.query)}`,
      },
      {
        title: `Latest updates on ${input.query}`,
        snippet: `Recent developments and news related to ${input.query}. This is demo data.`,
        url: `https://example.com/news/${encodeURIComponent(input.query)}`,
      },
    ];

    return {
      query: input.query,
      results: mockResults.slice(0, input.numResults || 5),
    };
  }
);

// Current Time Tool
export const timeTool = ai.defineTool(
  {
    name: 'getCurrentTime',
    description: 'Get the current time and date. Useful for time-sensitive queries.',
    inputSchema: z.object({
      timezone: z.string().optional().describe('Timezone (e.g., "America/New_York")'),
    }),
    outputSchema: z.object({
      currentTime: z.string(),
      timezone: z.string(),
      timestamp: z.number(),
    }),
  },
  async (input) => {
    const now = new Date();
    return {
      currentTime: now.toISOString(),
      timezone: input.timezone || 'UTC',
      timestamp: now.getTime(),
    };
  }
);

// Export all tools as an array for easy use
export const allTools = [weatherTool, calculatorTool, searchTool, timeTool];
