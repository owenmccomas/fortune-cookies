import { openai } from "~/utils/openai";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat";

export const getFortune = async () => {
  // Create specific yet universal prompts
  const prompts = [
    {
      role: "system",
      content: "Create a fortune cookie message that is negative and curt, and exteremely specific, yet universally applicable.",
    },
    {
      role: "system",
      content: "Create a fortune cookie message that is short, positive and motivating, and exteremely specific, yet universally applicable.",
    },
    {
      role: "system",
      content: "Create a fortune cookie message that is short, boring and neutral, and exteremely specific, yet universally applicable.",
    },
    // Add more prompts as needed
  ];

  // Randomly choose one of the prompts
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)] as CreateChatCompletionRequestMessage;

  // Generate the fortune cookie message
  const chatCompletion = await openai.chat.completions.create({
    messages: [randomPrompt],
    model: "gpt-3.5-turbo",
  });

  return chatCompletion.choices[0]?.message.content;
};
