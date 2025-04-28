import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "InPrex", // Unique app IDnp
  name: "Career Coach",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
