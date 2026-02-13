import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBirthdayWishes = async () => {
  try {
    return {
      content:
        "Chúc mừng sinh nhật 18 tủi công chúa của anh! Chúc em luôn xinh đẹp, hạnh phúc và mãi là em bé đáng yêu nhất thế gian của chỉ mình anh thuiii.",
      wishes: [
        "Mãi yêuuuuuuuuuu emmmmmmmm",
        "Luôn bên em cùng em trưởng thành",
        "Và cùng em đi hết quãng đường còn lại ạaaa",
      ],
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      content:
        "Chúc mừng sinh nhật 18 tủi công chúa của anh! Chúc em luôn xinh đẹp, hạnh phúc và mãi là em bé đáng yêu nhất thế gian của chỉ mình anh thuiii.",
      wishes: [
        "Mãi yêuuuuuuuuuu emmmmmmmm",
        "Luôn bên em cùng em trưởng thành",
        "Và cùng em đi hết quãng đường còn lại ạaaa",
      ],
    };
  }
};
