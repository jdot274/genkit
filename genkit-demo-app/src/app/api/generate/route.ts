import { NextRequest, NextResponse } from 'next/server';
import { ai } from '@/lib/genkit';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, temperature = 0.7, maxTokens = 1000 } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Generate response using Genkit
    const result = await ai.generate({
      prompt,
      config: {
        temperature,
        maxOutputTokens: maxTokens,
      },
    });

    return NextResponse.json({
      text: result.text,
      model: 'gemini-2.5-flash',
      finishReason: result.finishReason,
    });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response', details: (error as Error).message },
      { status: 500 }
    );
  }
}
