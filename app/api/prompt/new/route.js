import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (request) => {
  const { userId, prompt, tag } = await request.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt: prompt,
      tag: tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
};
