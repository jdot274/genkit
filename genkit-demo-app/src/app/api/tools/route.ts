import { NextRequest, NextResponse } from 'next/server';
import { ai } from '@/lib/genkit';
import { allTools } from '@/lib/tools';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Generate response with tool calling enabled
    const result = await ai.generate({
      prompt,
      tools: allTools,
      config: {
        temperature: 0.7,
      },
    });

    return NextResponse.json({
      text: result.text,
      model: 'gemini-2.5-flash',
      toolCalls: result.toolCalls || [],
      finishReason: result.finishReason,
    });
  } catch (error) {
    console.error('Tool call error:', error);
    return NextResponse.json(
      { error: 'Failed to execute tool call', details: (error as Error).message },
      { status: 500 }
    );
  }
}
