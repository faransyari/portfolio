import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { generateSystemPrompt } from '@/config/portfolio-info';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key not found in environment variables');
      return NextResponse.json({ error: 'OpenAI API key not configured. Please add your API key to .env.local file.' }, { status: 500 });
    }

    if (process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
      console.error('OpenAI API key is still set to placeholder value');
      return NextResponse.json({ error: 'Please replace the placeholder API key in .env.local with your actual OpenAI API key.' }, { status: 500 });
    }

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: generateSystemPrompt()
        },
        {
          role: 'user',
          content: message
        }
      ],
      model: 'gpt-3.5-turbo',
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('OpenAI API error:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('401') || error.message.includes('Incorrect API key')) {
        return NextResponse.json(
          { error: 'Invalid API key. Please check your OpenAI API key in .env.local file.' },
          { status: 500 }
        );
      }
      if (error.message.includes('quota') || error.message.includes('billing')) {
        return NextResponse.json(
          { error: 'OpenAI API quota exceeded. Please check your billing and usage limits.' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to get response from AI. Please try again later.' },
      { status: 500 }
    );
  }
}
