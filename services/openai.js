import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const getSummary = async(content) => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", content: "Você é especialista em resumir textos de sites" },
            {role: "user", content}
        ]
      });
        return completion.data.choices[0].message.content
}
export {getSummary}