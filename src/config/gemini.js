

import { GoogleGenerativeAI } from "@google/generative-ai";

async function runChat(prompt){
    const genAI = new GoogleGenerativeAI("AIzaSyCFlnKYcff9VPnOzVn0Bf8iXU-cbigFumI");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text()
}

export default runChat;