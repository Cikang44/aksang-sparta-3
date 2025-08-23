import { streamText, convertToModelMessages, UIMessage } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const runtime = "edge";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const modelMessages = convertToModelMessages(messages);

  const result = await streamText({
    model: google("models/gemini-1.5-flash-latest"),
    messages: modelMessages,
  });

  return result.toUIMessageStreamResponse();
}
