import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // System prompt to enforce financial domain restrictions
        const systemPrompt = {
            role: 'system',
            content: `You are a helpful and knowledgeable financial assistant for Capital Core Finance. 
      Your role is to answer questions related to finance, loans, interest rates, investment strategies, and Capital Core Finance's services. 
      
      CRITICAL INSTRUCTION: You must STRICTLY REFUSE to answer any questions that are not related to finance, money, economics, or the company's services. 
      If a user asks a non-financial question (e.g., about movies, coding, weather, general knowledge), politely decline and steer the conversation back to finance.
      
      Example Refusal: "I apologize, but I specialize in financial matters and Capital Core Finance services. I cannot assist with that topic. Is there anything related to loans or finance I can help you with?"`
        };

        // Prepend system prompt to the messages array
        const conversation = [systemPrompt, ...messages];

        const completion = await groq.chat.completions.create({
            messages: conversation,
            model: 'llama-3.3-70b-versatile',
            temperature: 0.7,
            max_tokens: 1024,
        });

        const botResponse = completion.choices[0]?.message?.content || "I apologize, but I'm having trouble retrieving a response right now.";

        return NextResponse.json({
            role: 'assistant',
            content: botResponse
        });

    } catch (error) {
        console.error('Error in chat route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
