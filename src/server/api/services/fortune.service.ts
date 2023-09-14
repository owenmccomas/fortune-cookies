import { openai } from "~/utils/openai";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat";

export const getFortune = async () => {
  const date = new Date().toLocaleDateString("en-US");
  const prompts = [
    {
      role: "system",
      content:
        "Create a fortune cookie message that is negative and curt, and exteremely specific, yet universally applicable. Do not use quotation marks.",
    },
    {
      role: "system",
      content:
        "Create a fortune cookie message that is short, positive and motivating, and exteremely specific, yet universally applicable. Do not use quotation marks.",
    },
    {
      role: "system",
      content:
        "Create a fortune cookie message that is short, boring and neutral, and exteremely specific, yet universally applicable. Do not use quotation marks.",
    },
    {
      role: "system",
      content:
        "Say something you would say to a second grader while they are throwing a tantrum whom you are annoyed with. Keep it short.",
    },
    {
      role: "system",
      content:
        "Say a very direct and pointed statement to a person who is being a goofball. Keep it between 6 to 15 words. Do not use quotation marks.",
    },
    {
      role: "system",
      content:
        "Say something about how brave the reader is and how proud of them you are, and make it specific. Keep it short. Do not use quotation marks. Do not address them, just say it to them.",
    },
    {
      role: "system",
      content:
        "Make a fortune cookie line about how the reader is going to regret their actions, and make it very specific and random. Keep it short. Do not use quotation marks.",
    },
    {
      role: "system",
      content:
        "Make a fortune cookie line about how the reader is going to find satisfaction their actions, and make it very specific and random. Keep it short. Do not use quotation marks.",
    },
    {
      role: "system",
      content:
        "Say something short but extremely specific, unique, and uninspiring. Make it a direct order at the reader. Do not address the reader, just say the line. Do not use quotation marks.",
    },
    {
      role: "system",
      content: "say 'Go to her.'",
    },
    {
      role: "system",
      content: "say 'Go to him.'",
    },
    {
      role: "system",
      content:
        "tell me that I need to shape up and get focused in a unique way. Keep it curt and rude. Be insulting. Keep it under 25 words. Do not use any curse words",
    },
    {
      role: "system",
      content:
        "say something that will make me feel good about myself. Make it very specific, and keep it short.",
    },
    {
      role: "system",
      content:
        "make an ominous prediction about the future. Keep it short and specific. Do not use quotation marks.",
    },
    {
      role: "system",
      content:
        "Make an dark prediction about my future. Keep it short and specific. Do not use quotation marks.",
    },
    {
      role: "system",
      content:
        "Tell me how I can foil another persons plans, say that in a unique way. Keep it short and specific. Do not use quotation marks.",
    },
    {
      role: "system",
      content:
        "Tell me that my secret is not safe, say that in a unique way. Keep it short and specific. Do not use quotation marks.",
    },
    {
      role: "system",
      content:
        "Keep your answer short and assure me that it is absolutely paramount that I remember these numbers. then give me a random string of numbers, but do not tell me that they are random, I need to beleive that they are important.",
    },
    {
      role: "system",
      content:
        "You are a fortune teller. Spit out a bunch of randoms symbols that are typically inaccessable on a normal keyboard in a methodical order then tell me in a unique way that they are the key to my future. DO NOT USE EMOJIS Keep your response short.",
    },
    {
      role: "system",
      content: `Return completely random coordinates, a date after ${date} and a time`,
    },
    {
      role: "system",
      content:
        "Make up some coordinates anywhere on earth, then say 'Get here asap, we need you.' do not use extra punctuation.",
    },
    {
      role: "system",
      content:
        "Say, 'Learn' and then a random obsucure mathimatical concept. Then give me a deadline. Assure me that it is important that I learn this. DO NOT EXPLAIN WHAT IT IS ABOUT.",
    },
    {
      role: "system",
      content:
        "Say, 'Learn' and then a random obsucure computer science concept. Then give me a deadline. Assure me that it is important that I learn this. DO NOT EXPLAIN WHAT IT IS ABOUT.",
    },
    {
      role: "system",
      content:
        "Say, 'Learn' and then a random obsucure religious concept. Assure me that it is important that I learn this. Do not explain the concept.",
    },
  ];

  // Randomly choose one of the prompts
  const randomPrompt = prompts[
    Math.floor(Math.random() * prompts.length)
  ] as CreateChatCompletionRequestMessage;

  // Generate the fortune cookie message
  const chatCompletion = await openai.chat.completions.create({
    messages: [randomPrompt],
    model: "gpt-3.5-turbo",
  });

  return chatCompletion.choices[0]?.message.content;
};
